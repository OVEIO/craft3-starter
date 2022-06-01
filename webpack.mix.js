const mix = require('laravel-mix')

require('dotenv').config()

mix
  .sass('src/scss/app.scss', 'css/app.css')
  .js('src/js/app.js', 'js/app.js')
  .setPublicPath('web/')
  .version()

mix.browserSync({
  proxy: {
    target: process.env.PRIMARY_SITE_URL,
  },
  files: [
    'web/css/*.css',
    'web/js/*.js',
    'templates/***/**/*',
    'templates/***/*',
    'templates/*',
  ],
  secure: false,
})
