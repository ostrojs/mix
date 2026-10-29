# Ostro Mix

Ostro Mix provides a clean, fluent API for defining basic webpack build steps for your OstroJS application. Mix supports a variety of common CSS and JavaScript preprocessors.

## Installation

```bash
npm install @ostro/mix --save-dev
```

## Usage

In your project root, create a `webpack.mix.js` or `webpack.mix.ts`:

```javascript
const mix = require('@ostro/mix');

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css');
```

Then run:

```bash
npx ostro-mix
# or for production
npx ostro-mix --production
# or for watch
npx ostro-mix watch
```

## License

Ostro Mix is open-sourced software licensed under the [MIT license](LICENSE.md).
