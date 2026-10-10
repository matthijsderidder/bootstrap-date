# bootstrap-date

Month calendar based on Bootstrap.

The package is available on [npm](https://www.npmjs.com/package/bootstrap-date) and [jsDelivr](https://www.jsdelivr.com/package/npm/bootstrap-date).

## What's included

```
src/                         source
  js/bootstrap-date.js      script entrypoint
  scss/bootstrap-date.scss  style entrypoint
dist/                        generated, do not edit
  css/bootstrap-date.css
  css/bootstrap-date.min.css
  js/bootstrap-date.js
  js/bootstrap-date.min.js
examples/                    HTML that points at dist
```

`npm run build` compiles `src` into `dist`. Bootstrap 6 is required. The date field uses [form adornments](https://getbootstrap.com/docs/6.0/forms/form-adorn/), which Bootstrap 5.3 does not have. The calendar icon comes from bootstrap-icons.

## Usage

Install from npm:

```bash
npm install bootstrap-date bootstrap@6 bootstrap-icons
```

Or load the published files from jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.2/font/bootstrap-icons.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-date@0.1.0/dist/css/bootstrap-date.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap-date@0.1.0/dist/js/bootstrap-date.min.js"></script>
```

Local builds use the same paths under `dist/`:

```html
<link rel="stylesheet" href="dist/css/bootstrap-date.min.css">
<script src="dist/js/bootstrap-date.min.js"></script>
```

The script initializes the calendar when `.month-picker`, `#month-grid`, `#date-input`, `#month-label`, `#prev-month` and `#next-month` are present. The widget overlays the form under the date input. See `examples/bootstrap-date.html`.
