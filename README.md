# OVEIO Craft 4 Starter

OVEIO Craft 4 Starter provides a quick-start project scaffold for Craft CMS websites. It uses Laravel Mix to build front-end assets.

## Usage

Create your .env file

```bash
cp .env.example .env
```

Fill in .env with your local database settings and provide the URL from which the application will be served.

```bash
composer install
npm install
php craft setup
```

The craft setup wizard will guide you through the process of installing the CMS.

## Running development build server
```bash
npx mix watch
```

Mix will watch you templates and scss/js files and build them whenever they change. BrowserSync will watch the built files and hot-update for assets or reload for templates.

## Using built assets
The mix plugin is included by default and provides an easy way to include your compiled assets in your templates.

```html
<link rel="stylesheet" href="{{ mix('css/app.css') }}">
<script src="{{ mix('js/app.js') }}"></script>
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
