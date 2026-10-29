const Mix = require('./Mix');

require('./helpers');

/*
 |--------------------------------------------------------------------------
 | Welcome to Ostro Mix!
 |--------------------------------------------------------------------------
 |
 | Ostro Mix provides a clean, fluent API for defining basic webpack
 | build steps for your Ostro application. Mix supports a variety
 | of common CSS and JavaScript pre-processors out of the box.
 |
 */

let mix = Mix.primary;

mix.boot();

module.exports = mix.api;
