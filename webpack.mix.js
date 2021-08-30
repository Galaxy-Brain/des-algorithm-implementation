let mix = require('laravel-mix');

mix.js('src/js/app.js','public/js').vue({version:2})
    .sass('src/sass/app.scss','/css')
    .setPublicPath('./public')