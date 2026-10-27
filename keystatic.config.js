import { config, collection, fields } from '@keystatic/core';

const requiredText = (label, max = 300, multiline = false) => fields.text({ label, multiline, validation: { isRequired: true, length: { min: 1, max } } });
const status = () => fields.select({ label: 'Publication status', description: 'Drafts stay off the website. Content saved in this public GitHub repository is not confidential.', options: [{ label: 'Draft', value: 'draft' }, { label: 'Published', value: 'published' }], defaultValue: 'draft' });
const title = () => fields.slug({ name: { label: 'Title', validation: { isRequired: true, length: { max: 180 } } }, slug: { label: 'URL name', description: 'Keep existing URL names unchanged so shared links continue working.', validation: { pattern: { regex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/, message: 'Use lowercase letters, numbers and hyphens.' }, length: { max: 100 } } } });
const image = () => fields.image({ label: 'Cover image', directory: 'public/images/editor', publicPath: '/images/editor/', description: 'Upload a JPG, PNG or WebP. Aim for under 2 MB.' });

export default config({
  storage: process.env.NODE_ENV === 'development' && process.env.NEXT_PUBLIC_KEYSTATIC_STORAGE !== 'github'
    ? { kind: 'local' }
    : { kind: 'github', repo: { owner: 'anwardnhs', name: 'Talatu' } },
  ui: { brand: { name: 'Talatu · Content editor' }, navigation: { Content: ['news', 'reports'] } },
  collections: {
    news: collection({ label: 'News stories', slugField: 'title', path: 'content/news/*', format: { data: 'json' }, columns: ['title', 'status', 'year'],
      ...(process.env.NODE_ENV === 'development' ? { previewUrl: '/editor/preview/news/{slug}' } : {}),
      schema: {
        title: title(), status: status(),
        category: fields.select({ label: 'Category', options: ['Corporate','Entertainment','Financial','Publishing','Foundation','Africa'].map(value => ({label:value,value})), defaultValue: 'Corporate' }),
        year: fields.text({ label: 'Publication year', validation: { isRequired: true, pattern: { regex: /^20\d{2}$/, message: 'Enter a four-digit year, such as 2026.' } } }),
        excerpt: requiredText('Short introduction', 400, true),
        featured: fields.checkbox({ label: 'Feature in the newsroom', description: 'If several stories are featured, the newest year is used first.', defaultValue: false }),
        image: image(),
        existingImage: fields.text({ label: 'Existing image path', description: 'Keep this to use the current image. A newly uploaded cover takes priority.' }),
        alt: requiredText('Image description', 240),
        imageCaption: fields.text({ label: 'Image caption' }),
        imageFit: fields.select({ label: 'Image layout', options: [{label:'Fill the image area',value:'cover'},{label:'Show complete artwork',value:'contain'}], defaultValue:'cover' }),
        paragraphs: fields.array(requiredText('Paragraph', 6000, true), { label: 'Story body', itemLabel: props => props.value.slice(0,70) || 'New paragraph', validation: { length: { min:1, max:40 } } }),
        relatedHref: fields.text({ label: 'Related page link', description: 'Optional site path, such as /investors/reports.' }),
        relatedLabel: fields.text({ label: 'Related link text' }),
        order: fields.integer({ label: 'Display order within the same year', defaultValue: 10, validation: { min:0, max:999 } }),
      },
    }),
    reports: collection({ label: 'Reports & resources', slugField: 'title', path: 'content/reports/*', format: { data:'json' }, columns: ['title','status','category'], schema: {
      title: title(), status: status(),
      category: fields.select({ label:'Category', options:['Results','Shareholding','Governance'].map(value=>({label:value,value})), defaultValue:'Results' }),
      format: fields.select({ label:'Resource type', options:['PDF','CSV','Web page'].map(value=>({label:value,value})), defaultValue:'PDF' }),
      detail: requiredText('Description', 500, true),
      file: fields.file({ label:'Upload PDF', directory:'public/reports/editor', publicPath:'/reports/editor/', description:'PDF files only, maximum 10 MB. Uploads are saved to the repository.' }),
      existingHref: fields.text({ label:'Existing file or page link', description:'Keep an existing /reports/ link or site page. An uploaded PDF takes priority.' }),
      pages: fields.integer({ label:'Page or slide count', defaultValue:1, validation:{min:1,max:1000} }),
      period: fields.text({label:'Reporting period',defaultValue:'FY2025'}),
      cover: fields.select({ label:'Featured cover', description:'Show up to three PDF reports above the resource library.', options:[{label:'No featured cover',value:'none'},{label:'Annual report',value:'annual'},{label:'Results presentation',value:'presentation'},{label:'Financial summary',value:'summary'}], defaultValue:'none' }),
      order: fields.integer({label:'Display order',defaultValue:10,validation:{min:0,max:999}}),
    } }),
  },
});
