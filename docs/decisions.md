# Decision log

## Inline SVGs

I found that I needed to control the stroke colour of SVG assets so they can listen to the current preferred theme and change accordingly. The direct way to change it is by setting the CSS property `fill` to the colour you want.

But you lose control of an SVG's internals once you set it as a `src` of any image (`img` or `Image` from `next/image`).

**Solution**: the only way to control the SVG stroke colour is to **inline** it and then control it (or a wrapper) via CSS.

In order to keep the React source code smaller, you _could_

- `import` it from a static asset like `@/assets/logo.svg`: but Turbopack transforms this into an object to be served statically (see Next static imports); as it expects you to pass it to `Image.src`
- Use the `simple-icons` package
  1. `import {siSomeIcon} from 'simple-icons'`
  2. `<div classname='icon' dangerouslySetInnerHtml={{ __html: siSomeIcon.svg }}>` as `siSomeIcon.svg` is the stringified content. Class `.icon` sets `fill`
- Inline it yourself by pasting the SVG content and returning it as JSX
  - **I chose this for maximum transparency and control**
