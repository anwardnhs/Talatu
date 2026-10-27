"""Generate the fictional FY2025 investor PDFs from the project's financial data."""
from pathlib import Path
import json
import shutil
from io import BytesIO
from xml.sax.saxutils import escape
from reportlab.pdfgen import canvas
from reportlab.lib.colors import HexColor
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.platypus import Paragraph
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.lib.utils import ImageReader
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
DATA = json.loads((ROOT / 'tmp/pdfs/report-data.json').read_text(encoding='utf-8-sig'))
OUT = ROOT / 'output/pdf'
OUT.mkdir(parents=True, exist_ok=True)
for name, filename in [('Body','arial.ttf'),('Bold','arialbd.ttf'),('Serif','georgia.ttf'),('Italic','georgiai.ttf')]:
    pdfmetrics.registerFont(TTFont(name, str(Path('C:/Windows/Fonts') / filename)))
INK, GREEN, WINE, PAPER, TAUPE = '#171614', '#37423D', '#754043', '#F7F3EC', '#9A8873'
M = 44

class Report:
    def __init__(self, filename, title, landscape=False):
        self.w, self.h = (960, 540) if landscape else A4
        self.path = OUT / filename
        self.c = canvas.Canvas(str(self.path), pagesize=(self.w,self.h), pageCompression=1)
        self.c.setTitle(title + ' | Talatu Plc | Fictional project')
        self.c.setAuthor('Talatu Plc - fictional project')
        self.c.setSubject('FY2025 selected financial information; year ended 31 December 2025')
        self.page = 0
    def rect(self,x,y,w,h,color):
        self.c.setFillColor(HexColor(color)); self.c.rect(x,self.h-y-h,w,h,fill=1,stroke=0)
    def text(self,text,x,y,size=11,font='Body',color=INK):
        if y+size > self.h-18: raise ValueError('Text outside page: '+text)
        self.c.setFont(font,size); self.c.setFillColor(HexColor(color)); self.c.drawString(x,self.h-y-size,text)
    def para(self,text,x,y,w,size=11,font='Body',color=INK,leading=None):
        style=ParagraphStyle('body',fontName=font,fontSize=size,leading=leading or size*1.55,textColor=HexColor(color))
        p=Paragraph(escape(text).replace('\n','<br/>'),style)
        _,height=p.wrap(w,self.h)
        if y+height>self.h-52: raise ValueError('Paragraph outside page: '+text[:60])
        p.drawOn(self.c,x,self.h-y-height)
        return y+height
    def image(self,path,x,y,w,h):
        with Image.open(ROOT/'public'/path.lstrip('/')) as source:
            im=source.convert('RGB'); iw,ih=im.size
            scale=max(w/iw,h/ih); cw,ch=w/scale,h/scale
            left=(iw-cw)/2; top=(ih-ch)*.42
            im=im.crop((left,top,left+cw,top+ch))
            im.thumbnail((1800,1800),Image.Resampling.LANCZOS)
            encoded=BytesIO()
            im.save(encoded,format='JPEG',quality=85,optimize=True)
            encoded.seek(0)
            self.c.drawImage(ImageReader(encoded),x,self.h-y-h,width=w,height=h)
    def start(self,section,dark=False):
        if self.page: self.c.showPage()
        self.page+=1
        self.rect(0,0,self.w,self.h,GREEN if dark else PAPER)
        self.text('talatu.',M,25,24,'Bold',PAPER if dark else INK)
        self.text(section.upper(),self.w-245,36,9,'Body','#E3D8C6' if dark else WINE)
        self.footer(dark)
    def footer(self,dark=False):
        color='#E3D8C6' if dark else '#655C51'
        self.text('Talatu Plc | NGX: TALATU',M,self.h-34,8,'Body',color)
        self.text('Fictional project - not audited',self.w/2-38,self.h-34,8,'Body',color)
        self.text(str(self.page).zfill(2),self.w-M-15,self.h-34,8,'Bold',color)
    def heading(self,title,subtitle=None):
        y=self.para(title,M,98,self.w-2*M,32 if self.h>600 else 38,'Serif',leading=37 if self.h>600 else 44)
        if subtitle: y=self.para(subtitle,M,y+16,self.w-2*M,11,'Body','#655C51')
        return y+28
    def table(self,rows,y,width=None):
        width=width or self.w-2*M
        for i,(label,value) in enumerate(rows):
            h=38
            if i%2==0: self.rect(M,y,width,h,'#EBE4D9')
            self.text(label,M+12,y+11,11)
            self.c.setFont('Bold',12); self.c.setFillColor(HexColor(WINE))
            self.c.drawRightString(M+width-12,self.h-y-25,value)
            y+=h
        return y
    def save(self):
        self.c.save()
        target=ROOT/'public/reports'/self.path.name; target.parent.mkdir(exist_ok=True)
        shutil.copyfile(self.path,target)
        return {'file':self.path.name,'pages':self.page,'bytes':self.path.stat().st_size}

METRICS=[(m['label'],m['ngn']) for m in DATA['investors']['highlights']]
def metrics(r,y,landscape=False):
    gap=24; col=(r.w-2*M-gap)/2
    for i,(label,value) in enumerate(METRICS):
        x=M+(i%2)*(col+gap); top=y+(i//2)*(94 if landscape else 106)
        r.text(label,x,top,11,'Body','#655C51')
        r.text(value,x,top+24,32 if landscape else 34,'Body',WINE if i in [0,3] else INK)
def segments(r,y):
    for i,item in enumerate(DATA['investors']['revenueBySegment']):
        top=y+i*55
        r.text(item['segment'],M,top,10.5)
        label=item.get('label',str(item['share'])+'%')
        r.text(label,r.w-M-42,top,12,'Bold',WINE)
        r.rect(M,top+24,r.w-2*M,5,'#E4DDCF')
        r.rect(M,top+24,(r.w-2*M)*item['share']/50,5,[GREEN,WINE,TAUPE,GREEN,WINE,TAUPE][i])
def cover(r,title,subtitle):
    r.start('FY2025',True)
    r.para(title,M,124,r.w-2*M,48,'Serif',PAPER,leading=53)
    r.text(subtitle,M,275,19,'Body',PAPER)
    r.text('Year ended 31 December 2025',M,312,12,'Body','#E3D8C6')
    r.image('images/lagos-waterfront.jpg',0,365,r.w,320)
    r.para('Talatu Plc\nNigerian Exchange (NGX): TALATU',M,713,r.w-2*M,12,'Body',PAPER)
    r.text('FICTIONAL PROJECT EDITION',M,775,9,'Bold','#E3D8C6')

results=[]
r=Report('talatu-plc-annual-report-fy2025.pdf','Annual Report FY2025')
cover(r,'Stories that move\na continent.','Annual Report FY2025')
r.start('The Group')
y=r.heading('One group. Six companies.','Broadcasting, entertainment, publishing, licensing and games across eight African markets.')
for x,value,label in [(M,'1962','Founded in Kaduna'),(M+175,'8','Operating markets'),(M+350,'6','Companies')]:
    r.text(value,x,y,40,'Serif',WINE); r.text(label,x,y+55,10)
y+=118
for i,b in enumerate(DATA['businesses']):
    top=y+(i//2)*112; x=M+(i%2)*265
    r.para(b['name'],x,top,235,17,'Serif',leading=21)
    r.para(b['category'],x,top+48,235,10,'Body','#655C51')
    r.para(b['leader']['name'],x,top+69,235,10)
r.para('Corporate headquarters: Talatu House, Ikoyi, Lagos. Operational headquarters: Southstone Campus, Lekki-Epe Expressway, Lagos. Egypt is an associate market, separate from the eight operating markets.',M,705,r.w-2*M,10)
r.start('Performance')
y=r.heading('FY2025 performance.','Selected financial highlights. All amounts are in Nigerian naira.')
metrics(r,y)
r.para('Revenue was ₦2.25tn and EBITDA was ₦563bn. Profit after tax was ₦269bn. The supplied figures are rounded; the EBITDA margin is reported as 25%.',M,565,r.w-2*M,13)
r.rect(M,665,r.w-2*M,65,GREEN)
r.text('25% EBITDA margin',M+18,686,16,'Body',PAPER)
r.text('0.6x net debt / EBITDA',M+275,686,14,'Body',PAPER)
r.start('Financial information')
y=r.heading('Financial information.','Talatu Plc | FY2025 | Selected reported measures')
y=r.table(METRICS,y)
y=r.table([('Earnings per share','₦23.1'),('Dividend per share','₦10.9'),('Dividend payout ratio','47%')],y+26)
r.para('Scope of this edition',M,y+34,r.w-2*M,17,'Serif')
r.para('This fictional project report presents selected measures from the supplied corporate profile. It is not a complete set of financial statements. Detailed balance-sheet categories, cash flows, tax reconciliations and an independent auditor’s opinion are not supplied and have not been invented.',M,y+68,r.w-2*M,11)
r.start('Our companies')
y=r.heading('Where revenue comes from.','Reported FY2025 revenue share by business. Bar scale: 0-50%.')
segments(r,y)
r.para('Shares are rounded. Talatu Interactive is reported as less than 1%; the bar uses a small visual marker. These figures are not an exact allocation and should not be summed as precise percentages.',M,610,r.w-2*M,10)
r.para('Comet Broadcasting Corporation is the largest reported contributor, followed by Odyssey Entertainment and Talatu Africa Media. Licensing, publishing and games provide additional routes for the Group’s content and intellectual property.',M,675,r.w-2*M,12)
r.start('Governance')
y=r.heading('Leadership and accountability.')
r.para('Anwar Alhassan, Executive Chairman',M,y,r.w-2*M,20,'Serif')
r.para('The chairman’s remit covers Group strategy, capital allocation, shareholder relations and intellectual property. Day-to-day operations are led by Chief Executive Officer David Saro.',M,y+42,r.w-2*M,12)
y+=130
r.para('The Board',M,y,r.w-2*M,20,'Serif')
r.para('The 11-member Board comprises four executive directors, five independent directors and two non-executive directors. Dr. Bukola Adewale is Lead Independent Director and chairs the Audit Committee.',M,y+40,r.w-2*M,12)
y+=132
r.para('Five standing committees',M,y,r.w-2*M,20,'Serif')
r.para('Audit\nRisk\nGovernance & Nomination\nRemuneration\nEditorial',M,y+42,r.w-2*M,12)
r.para('Editors retain editorial decision-making. The Board’s Editorial Committee, chaired by Angela Nwana, oversees adherence to the Editorial Charter and management’s responsibility to protect newsroom independence.',M,670,r.w-2*M,12)
r.start('Foundation')
y=r.heading('Backing the next generation.','Talatu Foundation supports first-time filmmakers, trainee journalists and media education in northern Nigeria.')
r.text('About ₦3.7bn',M,y+4,38,'Body',WINE)
r.para('FY2025 Foundation funding, approximately 1% of Group pre-tax profit.',M,y+65,r.w-2*M,11)
y+=140
for p in DATA['foundation']['programmes']:
    r.para(p['name'],M,y,r.w-2*M,21,'Serif')
    r.para(p['description'],M,y+38,r.w-2*M,12)
    y+=110
r.para('Foundation Chair: Aisha Alhassan\nExecutive Director: Hamza Lawal',M,700,r.w-2*M,11)
r.start('Reporting basis')
y=r.heading('About this report.')
notes=[('A fictional company','Talatu Plc, its listing, corporate information and financial figures form part of a fictional website project. No investment product, grant, subscription or commercial service is offered by this document.'),('Source and currency','Figures are drawn from the user-supplied Talatu corporate profile for the year ended 31 December 2025. The profile uses ₦1,500 = US$1 as a conversion assumption. This is not a live exchange rate. Rounded naira figures are reproduced as supplied.'),('What is not included','No audit opinion, detailed cash-flow statement, accounting-policy note set or full statement of financial position is available. This edition does not claim compliance with a financial reporting standard.'),('Market information','NGX: TALATU is the fictional listing identifier in the project. No live share price or market valuation is presented in this report.'),('Further information','The website reports library contains the results presentation, results release and financial summary. Demonstration contact: investors@talatu.com. The email address is a project placeholder.')]
for title,text in notes:
    r.text(title,M,y,16,'Serif',WINE); y=r.para(text,M,y+30,r.w-2*M,11)+25
results.append(r.save())

r=Report('talatu-plc-financial-summary-fy2025.pdf','Financial Summary FY2025')
r.start('Financial summary')
y=r.heading('FY2025 in figures.','Talatu Plc | Nigerian Exchange (NGX): TALATU\nYear ended 31 December 2025. Nigerian naira.')
metrics(r,y)
r.para('Selected reported information from the fictional Talatu project. Figures are rounded; no audit assurance is provided.',M,640,r.w-2*M,12)
r.start('Shareholder measures')
y=r.heading('Earnings and dividends.')
y=r.table([('Earnings per share','₦23.1'),('Dividend per share','₦10.9'),('Dividend payout ratio','47%'),('EBITDA margin','25%'),('Net debt / EBITDA','0.6x')],y)
r.para('Reading the measures',M,y+38,r.w-2*M,20,'Serif')
r.para('EBITDA is reported earnings before interest, tax, depreciation and amortisation. Net debt / EBITDA is the supplied leverage measure. The dividend payout is the reported dividend as a share of earnings per share. Reconciliations and a dividend payment timetable are not available in the profile.',M,y+78,r.w-2*M,12)
r.para('Reporting basis',M,620,r.w-2*M,20,'Serif')
r.para('All figures are fictional project data, reproduced from the supplied profile. Rounded naira amounts use the profile conversion assumption of ₦1,500 = US$1. No live market information, full financial statements or independent audit opinion is included.',M,660,r.w-2*M,11)
results.append(r.save())

r=Report('talatu-plc-results-release-fy2025.pdf','FY2025 Results Release')
r.start('Results release')
y=r.heading('Talatu Plc reports FY2025 results.','Year ended 31 December 2025 | NGX: TALATU')
r.para('Talatu Plc reported revenue of ₦2.25tn and profit after tax of ₦269bn for FY2025. EBITDA was ₦563bn, representing a reported margin of 25%.',M,y,r.w-2*M,15)
y=r.table(METRICS,y+118)
r.para('Shareholder measures',M,y+34,r.w-2*M,20,'Serif')
r.para('Earnings per share were ₦23.1. The reported dividend of ₦10.9 per share represents a 47% payout ratio. Net debt of ₦338bn was equivalent to 0.6 times EBITDA.',M,y+73,r.w-2*M,12)
r.para('Fictional project release. Selected rounded figures from the supplied profile; not audited financial statements. No dividend payment dates, comparative-period growth or forward guidance are provided.',M,708,r.w-2*M,10)
results.append(r.save())

r=Report('talatu-plc-results-presentation-fy2025.pdf','FY2025 Results Presentation',True)
r.start('Results presentation',True)
r.para('FY2025\nResults presentation.',M,125,650,52,'Serif',PAPER,leading=58)
r.text('Talatu Plc | Nigerian Exchange (NGX): TALATU',M,319,18,'Body',PAPER)
r.text('Year ended 31 December 2025',M,362,14,'Body','#E3D8C6')
r.text('FICTIONAL PROJECT EDITION - NOT AUDITED',M,440,11,'Bold','#E3D8C6')
r.start('The Group')
y=r.heading('Six companies. Eight operating markets.')
for i,b in enumerate(DATA['businesses']):
    x=M+(i%3)*295; top=y+(i//3)*120
    r.para(b['name'],x,top,260,21,'Serif',leading=26)
    r.para(b['category'],x,top+64,260,11,'Body','#655C51')
r.text('Nigeria is the home market. Egypt is an associate market, outside the eight operating markets.',M,455,12)
r.start('Financial highlights')
y=r.heading('FY2025 at a glance.','All amounts in Nigerian naira. Supplied rounded figures.')
metrics(r,y,True)
r.start('Earnings')
y=r.heading('Revenue to reported earnings.','Selected FY2025 measures. These are not a cash-flow bridge.')
for i,(label,value) in enumerate([('Revenue','₦2.25tn'),('EBITDA','₦563bn'),('Profit before tax','₦372bn'),('Profit after tax','₦269bn')]):
    x=M+i*222
    r.rect(x,y+10,204,152,GREEN if i%2==0 else WINE)
    r.text(label,x+16,y+28,12,'Body',PAPER)
    r.text(value,x+16,y+78,31,'Body',PAPER)
r.text('Reported EBITDA margin: 25%                 Net debt / EBITDA: 0.6x',M,405,19)
r.start('Revenue mix')
y=r.heading('Our businesses in the revenue mix.')
for i,item in enumerate(DATA['investors']['revenueBySegment']):
    top=y+i*44; label=item.get('label',str(item['share'])+'%')
    r.text(item['segment'],M,top,13)
    r.rect(390,top+5,390,10,'#E4DDCF')
    r.rect(390,top+5,390*item['share']/50,10,WINE if i%2 else GREEN)
    r.text(label,815,top,15,'Bold')
r.text('Reported rounded shares; Interactive is below 1%. Bar scale: 0-50%.',M,470,10)
r.start('Shareholder measures')
y=r.heading('Per-share information.')
for i,(value,label) in enumerate([('₦23.1','Earnings per share'),('₦10.9','Dividend per share'),('47%','Dividend payout')]):
    x=M+i*300
    r.text(value,x,y+25,58,'Body',WINE)
    r.text(label,x,y+112,17)
r.para('The profile does not provide payment dates or a dividend timetable. No live share-price information is included.',M,390,r.w-2*M,13)
r.start('Basis and contacts')
y=r.heading('Notes to this presentation.')
r.para('This presentation belongs to a fictional corporate website project. It is not an investment offer, audited financial report or forecast. Selected FY2025 figures are reproduced from the user-supplied corporate profile.',M,y,740,16)
r.para('Currency: Nigerian naira. The profile conversion assumption is ₦1,500 = US$1; it is not a live rate. Comparative growth, full financial statements and an independent audit opinion have not been invented.',M,y+110,740,15)
r.text('Demonstration investor contact: investors@talatu.com',M,405,15,'Body',WINE)
results.append(r.save())
(ROOT/'tmp/pdfs/report-manifest.json').write_text(json.dumps(results,indent=2),encoding='utf-8')
print(json.dumps(results,indent=2))
