![Made to be Plundered](https://img.shields.io/badge/Made%20to%20be%20Plundered-royalblue)
[![Latest version](https://img.shields.io/github/v/release/PaulioRandall/p69-util)](https://github.com/PaulioRandall/p69-util/releases)
[![Release date](https://img.shields.io/github/release-date/PaulioRandall/p69-util)](https://github.com/PaulioRandall/p69-util/releases)

# P69 Util

Provides utility structures and functions for use with **P69** token files.

- **P69**: https://github.com/PaulioRandall/p69
- **P69 Files**: https://github.com/PaulioRandall/p69-files
- **P69 Svelte**: https://github.com/PaulioRandall/p69-svelte
- **P69 Util**: https://github.com/PaulioRandall/p69-util

## Contents

- [colorMap(map, userOptions)](#colorMap_map--userOptions_)
- [colorMappers](#colorMappers)
- [sizeMap](#sizeMap)
- [sizeMappers](#sizeMappers)
- [absSizeMap](#absSizeMap)
- [absSizeMappers](#absSizeMappers)
- [generateVariables](#generateVariables)

## `colorMap(map, userOptions)`

```js
const colors = Colors.map({
	crimson: '#DC143C',
	royalblue: '#4169E1',
}, {
	// Formats to create values for.
	formats: ['', 'hex', 'rgb', 'raw', 'rawa'],

	// The format to use for the empty format.
	defaultFormat: 'hex',
})

// console.log(colors)
{
	crimson: {
		'': '#DC143C',
		hex: '#DC143C',
		rgb: 'rgb(220, 20, 60)', // rgba(220, 20, 60, 1)
		raw: [220, 20, 60],
		raw: [220, 20, 60, 1],
	},
	royalblue: {
		'': '#4169E1',
		hex: '#4169E1',
		rgb: 'rgb(65, 105, 225)', // rgba(65, 105, 225, 1)
		raw: [65, 105, 225],
		raw: [65, 105, 225, 1],
	},
}
```

[^Back to contents](#contents)

## `Sizes`

[^Back to contents](#contents)

## `Variables`

[^Back to contents](#contents)
