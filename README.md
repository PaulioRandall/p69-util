![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p69-util)](https://github.com/PaulioRandall/p69-util/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p69-util)](https://github.com/PaulioRandall/p69-util/releases)

# P69 Util

Provides utility functions for use with **P69** token files.

- **P69**: https://github.com/PaulioRandall/p69
- **P69 Files**: https://github.com/PaulioRandall/p69-files
- **P69 Svelte**: https://github.com/PaulioRandall/p69-svelte
- **P69 Util**: https://github.com/PaulioRandall/p69-util

## Functions

- [colorMap(map, userOptions)](#colormapmap-useroptions)
- [colorMappers(map, userOptions)](#colormappersmap-useroptions)
- [sizeMap(map, userOptions)](#sizemapmap-useroptions)
- [sizeMappers(map, userOptions)](#sizemappersmap-useroptions)
- [absSizeMap(map, userOptions)](#abssizemapmap-useroptions)
- [absSizeMappers(map, userOptions)](#abssizemappersmap-useroptions)
- [generateVariables(map, userOptions)](#generatevariablesmap-useroptions)

## `colorMap(map, userOptions)`

```js
import P69Util from 'p69-util'

const colors = P69Util.colorMap(
	{
		crimson: '#DC143C',
		royalblue: '#4169E1',
		seagreen: '#2E8B57',
	},
	{
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

[^Back to contents](#contents)

## `colorMappers(map, userOptions)`

```js
import P69Util from 'p69-util'

const mappers = P69Util.colorMappers(
	{
		crimson: '#DC143C',
		royalblue: '#4169E1',
	},
	{
		// Formats to create values for.
		formats: ['', 'hex', 'rgb', 'raw'],

		// The format to use for the empty format.
		defaultFormat: 'hex',
	}
)

mappers.crimson() // "#dc143c"
mappers.crimson('hex') // "#dc143c"
mappers.crimson('rgb') // "rgb(220, 20, 60)"
mappers.crimson('raw') // [220, 20, 60]
```

[^Back to contents](#contents)

## `sizeMap(map, userOptions)`

```js
import P69Util from 'p69-util'

const sizes = P69Util.sizeMap(
	{
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Number of pixels relative to base font size (rem).
		pxPerRem: 16.0,

		// Formats to create values for.
		formats: ['', 'px', 'em', 'rem'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

console.log(sizes) /*
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

[^Back to contents](#contents)

## `sizeMappers(map, userOptions)`

```js
import P69Util from 'p69-util'

const mappers = P69Util.sizeMappers(
	{
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Number of pixels relative to base font size (rem).
		pxPerRem: 16.0,

		// Formats to create values for.
		formats: ['', 'px', 'em', 'rem'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

mappers.md() // "16px"
mappers.md('px') // "16px"
mappers.md('em') // "1em"
mappers.md('rem') // "1rem"
```

[^Back to contents](#contents)

## `absSizeMap(map, userOptions)`

```js
import P69Util from 'p69-util'

const sizes = P69Util.absSizeMap(
	{
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Number of pixels in an inch.
		pxPerInc: 96.0,

		// Formats to create values for.
		formats: ['', 'px', 'pt', 'pc', 'in', 'cm', 'mm'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

console.log(sizes) /*
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

[^Back to contents](#contents)

## `absSizeMappers(map, userOptions)`

```js
import P69Util from 'p69-util'

const mappers = P69Util.absSizeMappers(
	{
		sm: 12,
		md: 16,
		lg: 20,
	},
	{
		// Number of pixels in an inch.
		pxPerInc: 96.0,

		// Formats to create values for.
		formats: ['', 'px', 'pt', 'pc', 'in', 'cm', 'mm'],

		// The format to use for the empty format.
		defaultFormat: 'px',
	}
)

mappers.md() // "16px"
mappers.md('px') // "16px"
mappers.md('pt') // "12pt",
mappers.md('pc') // "1pc",
mappers.md('in') // "0.167in",
mappers.md('cm') // "0.42cm",
mappers.md('mm') // "4.2mm",
```

[^Back to contents](#contents)

## `generateVariables(map, userOptions)`

```js
import P69Util from 'p69-util'

const variables = P69Util.generateVariables(
	{
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

[^Back to contents](#contents)
