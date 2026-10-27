from pathlib import Path
from PIL import Image, ImageOps, ImageDraw
import json
from pypdf import PdfReader
root=Path('.')
manifest=json.loads(Path('tmp/pdfs/report-manifest.json').read_text())
for item in manifest:
    stem=Path(item['file']).stem
    pages=sorted(Path('tmp/pdfs').glob(stem+'-*.png'),key=lambda p:int(p.stem.rsplit('-',1)[1]))
    assert len(pages)==item['pages'],(stem,len(pages))
    reader=PdfReader(Path('tmp/reports')/item['file'])
    text='\n'.join(page.extract_text() for page in reader.pages)
    assert len(reader.pages)==item['pages']
    assert 'Talatu Plc' in text and 'TALATU' in text and 'Fictional' in text
    assert '₦2.25tn' in text and '₦269bn' in text,(stem,'missing figures')
    assert '\ufffd' not in text
    tw,th=(300,424) if item['pages']==8 else (480,270) if item['pages']==7 else (420,594)
    cols=min(4,len(pages)); rows=(len(pages)+cols-1)//cols
    sheet=Image.new('RGB',(cols*tw,rows*(th+24)),'#dad3c8'); draw=ImageDraw.Draw(sheet)
    for i,p in enumerate(pages):
        im=ImageOps.contain(Image.open(p).convert('RGB'),(tw-8,th-8))
        x=(i%cols)*tw; y=(i//cols)*(th+24)
        sheet.paste(im,(x+4,y+4));draw.text((x+8,y+th+3),f'Page {i+1}',fill='black')
    sheet.save(Path('tmp/pdfs')/(stem+'-contact.jpg'),quality=90)
    print(stem, item['pages'],'pages, text and figures verified')
