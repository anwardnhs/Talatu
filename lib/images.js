// Every image slot on the site. Drop a Nano Banana render at /public/images/<key>.jpg and it replaces the
// fallback automatically. Until then `fallback` (picsum placeholder photo, seeded so it never changes) is shown.
// See IMAGE_PROMPTS.md for the prompt per key.
const pic = (key, w, h) => `https://picsum.photos/seed/talatu-${key}/${w}/${h}`;
const slot = (key, w, h, alt) => [key, { src: `/images/${key}.jpg`, fallback: pic(key, w, h), alt, w, h }];

export const images = Object.fromEntries([
  // News (4:3)
  slot("news-fy2025-results", 1200, 900, "Talatu FY2025 results"),
  slot("news-southstone-campus-commissioned", 1200, 900, "Southstone Campus, Lagos"),
  slot("news-talatu-interactive-launch", 1200, 900, "Talatu Interactive games"),
  slot("news-red-sea-pictures-stake", 1200, 900, "Red Sea Pictures, Cairo"),
  slot("news-odyssey-plus-egypt", 1200, 900, "Odyssey+ Arabic-language tier"),
  // Businesses (5:4)
  slot("business-broadcasting", 1200, 960, "CBC newsroom and studio"),
  slot("business-entertainment", 1200, 960, "Odyssey film set"),
  slot("business-africa-media", 1200, 960, "Talatu Africa Media"),
  slot("business-licensing", 1200, 960, "Talatu Licensing characters"),
  slot("business-publishing", 1200, 960, "Jaridah Publishing"),
  slot("business-interactive", 1200, 960, "Talatu Interactive"),
  // Title posters (2:3)
  slot("title-harmattan-court", 800, 1200, "Harmattan Court"),
  slot("title-zuri-and-the-talking-drum", 800, 1200, "Zuri and the Talking Drum"),
  slot("title-the-surveyors-daughter", 800, 1200, "The Surveyor’s Daughter"),
  slot("title-the-compound", 800, 1200, "The Compound"),
  slot("title-the-long-ballot", 800, 1200, "The Long Ballot"),
  // Section images (16:10 / 1200x630)
  slot("foundation", 1600, 1000, "Talatu Foundation"),
  slot("careers", 1600, 1000, "Careers at Talatu"),
  slot("campus", 1600, 1000, "Southstone Campus"),
  slot("og", 1200, 630, "Talatu"),
]);
