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

- [Colors](#colors)
  - [colorMap(map, userOptions)](#colormapmap-useroptions)
  - [colorMappers(map, userOptions)](#colormappersmap-useroptions)
- [Sizes](#sizes)
  - [sizeMap(map, userOptions)](#sizemapmap-useroptions)
  - [sizeMappers(map, userOptions)](#sizemappersmap-useroptions)
  - [absSizeMap(map, userOptions)](#abssizemapmap-useroptions)
  - [absSizeMappers(map, userOptions)](#abssizemappersmap-useroptions)
- [Variables](#variables)
  - [generateVariables(map, userOptions)](#generatevariablesmap-useroptions)

## Colors

### `colorMap(map, userOptions)`

Accepts a map of colors and returns a map of each color to various color formats.

```js
import P69Util from 'p69-util'

const colors = P69Util.colorMap(
	{
		// Map or object (no nesting!)
		// Color string must be hex or CSS rgb value, e.g. #112233 or rgb(1 2 3)
		// name: 'color'
		crimson: '#DC143C',
		royalblue: '#4169E1',
		seagreen: '#2E8B57',
	},
	{
		// Options
		// Formats to create values for.
		formats: ['', 'hex', 'rgb', 'raw'],

		// The format to use for the empty format.
		defaultFormat: 'hex',
	}
)

console.log(colors) /*
{
	crimson: {
		'': '#DC143C',
		hex: '#DC143C',
		rgb: 'rgb(220, 20, 60)',
		raw: [220, 20, 60],
	},
	royalblue: {
		'': '#4169E1',
		hex: '#4169E1',
		rgb: 'rgb(65, 105, 225)',
		raw: [65, 105, 225],
	},
	seagreen: {
		'': '#2E8B57',
		hex: '#2E8B57',
		rgb: 'rgb(46, 139, 87)',
		raw: [46, 139, 87],
	},
} */
```

```css
/* .p69 */
selector {
	color: $colors.crimson.hex; /* #dc143c */
	color: $colors.crimson.rgb; /* rgb(220, 20, 60) */
	color: rgba($colors.crimson.raw / 0.5); /* 220, 20, 60 */
}
```

[^Back to contents](#functions)

### `colorMappers(map, userOptions)`

Accepts a map of colors and returns a map of functions that returns its color in various formats.

```js
import P69Util from 'p69-util'

const colors = P69Util.colorMappers(
	{
		// Map or object (no nesting!)
		// Color string must be hex or CSS rgb value, e.g. #112233 or rgb(1 2 3)
		// name: 'color'
		crimson: '#DC143C',
		royalblue: '#4169E1',
		seagreen: '#2E8B57',
	},
	{
		// Options
		// Formats to create values for.
		formats: ['', 'hex', 'rgb', 'raw'],

		// The format to use for the empty format.
		defaultFormat: 'hex',
	}
)

colors.crimson() // "#dc143c"
colors.crimson('hex') // "#dc143c"
colors.crimson('rgb') // "rgb(220, 20, 60)"
colors.crimson('raw') // [220, 20, 60]
```

```css
/* .p69 */
selector {
	color: $colors.crimson(); /* #dc143c */
	color: $colors.crimson(hex); /* #dc143c */
	color: $colors.crimson(rgb); /* rgb(220, 20, 60) */
	color: rgba($colors.crimson(raw) / 0.5); /* 220, 20, 60 */
}
```

[^Back to contents](#functions)

## Sizes

### `sizeMap(map, userOptions)`

Accepts a map of sizes (font sizes, widths, heights, etc) and returns a map of each size in various formats.

```js
import P69Util from 'p69-util'

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

[^Back to contents](#functions)

### `sizeMappers(map, userOptions)`

Accepts a map of sizes (font sizes, widths, heights, etc) and returns a map of functions that returns its size in various formats.

```js
import P69Util from 'p69-util'

const fontSizes = P69Util.sizeMappers(
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

[^Back to contents](#functions)

### `absSizeMap(map, userOptions)`

Same as `sizeMap` except it returns absolute units.

```js
import P69Util from 'p69-util'

const fontSizes = P69Util.absSizeMap(
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

[^Back to contents](#functions)

### `absSizeMappers(map, userOptions)`

Same as `sizeMappers` except it returns absolute units.

```js
import P69Util from 'p69-util'

const fontSizes = P69Util.absSizeMappers(
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

[^Back to contents](#functions)

## Variables

### `generateVariables(map, userOptions)`

Accepts an user defined nested object of tokens and returns a liine separated string of CSS variables.

```js
import P69Util from 'p69-util'

const variables = P69Util.generateVariables(
	{
		// Nested map or object
		// Structure determines CSS variable names
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
		// Prefix to apply to all variables (lines), except the first.
		// This is usually one or more spaces or tabs to create
		// readable formatting.
		prefix: '',

		// True if the prefix should be applied to the first line.
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

[^Back to contents](#functions)
