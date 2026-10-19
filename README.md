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

`npm run build` compiles `src` into `dist`. Bootstrap 5.3.8 or later 5.3 is required. The browser supplies the date field icon. Focus opens the calendar and blur closes it.

## Usage

Install from npm:

```bash
npm install bootstrap-date
```

Or load the published files from jsDelivr:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-date@0.3.0/dist/css/bootstrap-date.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap-date@0.3.0/dist/js/bootstrap-date.min.js"></script>
```

Local builds use the same paths under `dist/`:

```html
<link rel="stylesheet" href="dist/css/bootstrap-date.min.css">
<script src="dist/js/bootstrap-date.min.js"></script>
```

Add `bs-date` to a date field. The script leaves the field untouched and opens the calendar as a fixed overlay, so it works in an existing Bootstrap form.

```html
<label class="form-label" for="date">Date</label>
<input type="date" class="form-control bs-date" id="date">
```

Previous and next month slide in from the left and right. See `examples/bootstrap-date.html`.

## Changelog

### 0.3.0

- Stable release.
- Requires Bootstrap 5.3.8.
- The field stays untouched. The calendar is a fixed overlay.
- The native date picker no longer opens. The browser icon stays.

### 0.2.0

- Stable release. Attach the calendar to any field with class `bs-date`.

### 0.1.1

- Published release after the repository reset.

### 0.1.0

- Initial release.
- Month calendar under a date input.
- Month arrows and a year view.
- The selected day uses `bg-primary`.
