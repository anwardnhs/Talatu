# Editorial showcase artwork

Image slots for the homepage showcase are configured in `data/worlds.js`.
To replace an animated SVG placeholder, add your image here and update its entry:

```js
image: "/images/films.jpg",
imageAlt: "A brief description of the supplied image",
```

The six slots are `films`, `television`, `streaming`, `journalism`, `worlds`, and `games`.
Landscape or square images work well. At desktop sizes, streaming uses a nearly square crop and films gets the largest image space. The responsive layout crops images with `object-fit: cover`; keep important subjects near the centre. Text and card controls are supplied separately, so artwork does not need baked-in headlines.

Leave `image: null` to keep the custom animated SVG. No stock photos or external image requests are used by this section.

The opening hero has a separate image slot in `data/hero.js`. Set `image` to `/images/hero.jpg` and provide descriptive `alt` text. A portrait image works best; its frame crops with `object-fit: cover`. The custom SVG landscape is used until final artwork is supplied.

## Homepage selection

The hero uses `Cinematic Set with Regal Actress.png`, the introduction uses the black-and-white production-lighting photograph, and the Films, Television, Streaming and Publishing cards use the clapperboard, studio broadcast, Harmattan Court poster and Jaridah newspaper respectively. Executive portraits, headquarters, offices and campus photographs are excluded. Licensing and Interactive keep their custom SVG artwork until relevant images are available. Images are served through Next.js image optimization; originals remain unchanged.
