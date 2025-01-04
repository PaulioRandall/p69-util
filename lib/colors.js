export const stringifyRGBs = (rgbMap) => {
	const result = {}

	for (const name in rgbMap) {
		result[name] = stringifyRGB(rgbMap[name])
	}

	return result
}

export const stringifyRGB = (rgb) => {
	switch (rgb.length) {
		case 3:
			return `rgb(${rgb.join(', ')})`
		case 4:
			return `rgba(${rgb.join(', ')})`
		default:
			throw new Error(`[P69 Util] Invalid RGB value: '${rgb}'`)
	}
}
