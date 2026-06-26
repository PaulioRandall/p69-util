![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p69-util)](https://github.com/PaulioRandall/p69-util/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p69-util)](https://github.com/PaulioRandall/p69-util/releases)

# P69 Util

Utility functions for use with **P69** token files.

- **P69**: https://github.com/PaulioRandall/p69
- **P69 Files**: https://github.com/PaulioRandall/p69-files
- **P69 Svelte**: https://github.com/PaulioRandall/p69-svelte
- **P69 Util**: https://github.com/PaulioRandall/p69-util

## Functions

### `generateSizeMap(map, userOptions)`

Accepts a map of sizes (font sizes, widths, heights, etc) and returns a map of each size in various formats.

```js
import P69Util from '@paulio/p69-util'

const fontSizes = P69Util.sizeMap(
	{
		// Map or object (no nesting!)
		// Pixel values must be numbers.
		// name: pixels (px)
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Options
		// Number of pixels relative to base font size (rem).
		pxPerRem: 16.0,

		// Formats to create values for.
		formats: ['', 'px', 'em', 'rem'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

console.log(fontSizes) /*
{
	sm: {
		'': '12px',
		px: '12px',
		em: '0.75em',
		rem: '0.75rem',
	},
	md: {
		'': '16px',
		px: '16px',
		em: '1em',
		rem: '1rem',
	},
	lg: {
		'': '20px',
		px: '20px',
		em: '1.25em',
		rem: '1.25rem',
	},
} */
```

```css
/* .p69 */
selector {
	font-size: $fontsizes.md.px; /* 16px */
	font-size: $fontsizes.md.em; /* 1em */
	font-size: $fontsizes.md.rem; /* 1rem */
}
```

### `generateSizeMapper(map, userOptions)`

Accepts a map of sizes (font sizes, widths, heights, etc) and returns a map of functions that returns its size in various formats.

```js
import P69Util from '@paulio/p69-util'

const fontSizes = P69Util.generateSizeMapper(
	{
		// Map or object (no nesting!)
		// Pixel values must be numbers.
		// name: pixels (px)
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Options
		// Number of pixels relative to base font size (rem).
		pxPerRem: 16.0,

		// Formats to create values for.
		formats: ['', 'px', 'em', 'rem'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

fontSizes.md() // "16px"
fontSizes.md('px') // "16px"
fontSizes.md('em') // "1em"
fontSizes.md('rem') // "1rem"
```

```css
/* .p69 */
selector {
	font-size: $fontSizes.md(); /* 16px */
	font-size: $fontSizes.md(px); /* 16px */
	font-size: $fontSizes.md(em); /* 1em */
	font-size: $fontSizes.md(rem); /* 1rem */
}
```

### `generateAbsSizeMap(map, userOptions)`

Same as `generateSizeMap` except it returns absolute units.

```js
import P69Util from '@paulio/p69-util'

const fontSizes = P69Util.generateAbsSizeMap(
	{
		// Map or object (no nesting!)
		// Pixel values must be numbers.
		// name: pixels (px)
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Options
		// Number of pixels in an inch.
		pxPerInc: 96.0,

		// Formats to create values for.
		formats: ['', 'px', 'pt', 'pc', 'in', 'cm', 'mm'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

console.log(fontSizes) /*
{
	sm: {
		'': '12px',
		px: '12px',
		pt: '9pt',
		pc: '0.75pc',
		in: '0.125in',
		cm: '0.32cm',
		mm: '3.2mm',
	},
	md: {
		'': '16px',
		px: '16px',
		pt: '12pt',
		pc: '1pc',
		in: '0.167in',
		cm: '0.42cm',
		mm: '4.2mm',
	},
	lg: {
		'': '20px',
		px: '20px',
		pt: '15pt',
		pc: '1.25pc',
		in: '0.208in',
		cm: '0.53cm',
		mm: '5.3mm',
	}
} */
```

```css
/* .p69 */
selector {
	font-size: $fontSizes.md.px; /* 16px */
	font-size: $fontSizes.md.pt; /* 12pt */
	font-size: $fontSizes.md.pc; /* 1pc */
	font-size: $fontSizes.md.in; /* 0.167in */
	font-size: $fontSizes.md.cm; /* 0.42cm */
	font-size: $fontSizes.md.mm; /* 4.2mm */
}
```

### `generateAbsSizeMapper(map, userOptions)`

Same as `generateSizeMapper` except it returns absolute units.

```js
import P69Util from '@paulio/p69-util'

const fontSizes = P69Util.generateAbsSizeMapper(
	{
		// Map or object (no nesting!)
		// Pixel values must be numbers.
		// name: pixels (px)
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Options
		// Number of pixels in an inch.
		pxPerInc: 96.0,

		// Formats to create values for.
		formats: ['', 'px', 'pt', 'pc', 'in', 'cm', 'mm'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

fontSizes.md() // "16px"
fontSizes.md('px') // "16px"
fontSizes.md('pt') // "12pt",
fontSizes.md('pc') // "1pc",
fontSizes.md('in') // "0.167in",
fontSizes.md('cm') // "0.42cm",
fontSizes.md('mm') // "4.2mm",
```

```css
/* .p69 */
selector {
	font-size: $fontSizes.md(); /* 16px */
	font-size: $fontSizes.md(px); /* 16px */
	font-size: $fontSizes.md(pt); /* 12pt */
	font-size: $fontSizes.md(pc); /* 1pc */
	font-size: $fontSizes.md(in); /* 0.167in */
	font-size: $fontSizes.md(cm); /* 0.42cm */
	font-size: $fontSizes.md(mm); /* 4.2mm */
}
```

### `generateVariables(map, userOptions)`

Accepts an user defined nested object of tokens and returns a line separated string of CSS variables.

```js
import P69Util from 'p69-util'

const variables = P69Util.generateVariables(
	{
		// Nested map or object. Structure determines CSS
		// variable names
		color: {
			primary: '#0000FF',
			secondary: '#FF0000',
		},
		font: {
			size: {
				sm: '0.8rem',
				md: '1rem',
				lg: '1.2rem',
			},
			family: {
				nunito: ['Nunito', 'Verdana', 'Tahoma'],
				georgia: ['Georgia', 'Garamond', 'Times New Roman'],
			},
		},
	},
	{
		// Options

		// Prefix to apply to all variables (lines), except
		// the first. This is usually one or more spaces or
		// tabs to create readable formatting.
		prefix: '',

		// True if the prefix should be applied to the first
		// line.
		prefixFirst: false,
	}
)

console.log(variables) /*
--color-primary: #0000FF;
--color-secondary: #FF0000;
--font-size-sm: 0.8rem;
--font-size-md: 1rem;
--font-size-lg: 1.2rem;
--font-family-nunito: Nunito,Verdana,Tahoma;
--font-family-georgia: Georgia,garamond,Times New Roman;
*/
```
