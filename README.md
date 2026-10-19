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
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-date@0.2.4-beta/dist/css/bootstrap-date.min.css">
<script src="https://cdn.jsdelivr.net/npm/bootstrap-date@0.2.4-beta/dist/js/bootstrap-date.min.js"></script>
```

Local builds use the same paths under `dist/`:

```html
<link rel="stylesheet" href="dist/css/bootstrap-date.min.css">
<script src="dist/js/bootstrap-date.min.js"></script>
```

Add `bs-date` to a date field. The script builds the calendar and places it under that field, so it works in an existing Bootstrap form.

```html
<label class="form-label" for="date">Date</label>
<input type="date" class="form-control bs-date" id="date">
```

Previous and next month slide in from the left and right. See `examples/bootstrap-date.html`.

## Changelog

### 0.2.4-beta

- The field stays untouched. The calendar is a fixed overlay.

### 0.2.3-beta

- The native date picker no longer opens. The browser icon stays.

### 0.2.2-beta

- The calendar overlays the form and no longer stretches a smaller field.

### 0.2.1-beta

- Requires Bootstrap 5.3.8 instead of Bootstrap 6.
- Removed the adorn button. The browser date icon stays, and focus and blur still open and close the calendar.

### 0.2.0

- Stable release. Attach the calendar to any field with class `bs-date`.

### 0.1.7-beta

- Attach the calendar to any field with class `bs-date`.

### 0.1.6-beta

- The example starts on the current date.
- Previous and next month slide in from the left and right.

### 0.1.5-beta

- Release title uses `<version>-beta`.

### 0.1.4-beta

- Bootstrap 6 is a dependency.

### 0.1.3-beta

- Added a version changelog to the README.

### 0.1.2-beta

- Published as a beta. It does not replace the `latest` tag.
- Prerelease publishes use their npm dist-tag.

### 0.1.1

- Published release after the repository reset.

### 0.1.0

- Initial release.
- Month calendar under a date input, with a calendar icon.
- Month arrows and a year view.
- Widget uses `theme-secondary theme-subtle`. Unselected days use `theme-inverse theme-subtle`. The selected day uses `bg-primary`.
- Requires Bootstrap 6 for form adornments.
