const mix = require('laravel-mix');
const EasyEnv = require('easy-env-loader');
const path = require('path');

// Load in the .env file so that we can proxy the corrent URL
const options = {
    envPath:path.resolve(__dirname, './.env'),
};
 
const env = new EasyEnv(options);
process.env = env.parsed;

mix.sass('src/scss/app.scss','css/app.css')
.js('src/js/app.js','js/app.js')
.setPublicPath('web/assets');

mix.browserSync({
  proxy: {
    target: process.env.PRIMARY_SITE_URL,
  },
  files: ['web/assets/css/*.css','web/assets/js/*.js','templates/***/*','templates/*'],
  secure:false
});