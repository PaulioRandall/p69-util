export default class Color {
	constructor(init = { r: 0, g: 0, b: 0 }) {
		if (typeof init === 'string') {
			init = parseColorString(init)
		}

		const { r, g, b } = init

		this.r = r ? r : 0
		this.g = g ? g : 0
		this.b = b ? b : 0
	}

	toArray() {
		return [this.r, this.g, this.b]
	}

	toString() {
		const mapComponent = (c) => c.toString(16).padStart(2, '0')

		const hex = {
			r: mapComponent(this.r),
			g: mapComponent(this.g),
			b: mapComponent(this.b),
		}

		return `#${hex.r}${hex.g}${hex.b}`
	}

	toRgbString() {
		return `rgb(${this.r} ${this.g} ${this.b})`
	}
}

const parseColorString = (s) => {
	s = s.trim()

	const formats = [
		{
			// #RRGGBB
			pattern: /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
			hasAlpha: false,
			radix: 16,
		},
		{
			// #RRGGBBAA
			pattern: /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i,
			hasAlpha: true,
			radix: 16,
		},
		{
			// rgb(r, g, b)
			pattern: /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
			hasAlpha: false,
			radix: 10,
		},
		{
			// rgb(r g b)
			pattern: /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\)$/i,
			hasAlpha: false,
			radix: 10,
		},
		{
			// rgb(r, g, b, a)
			pattern:
				/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(1|0|0\.[0-9]+|\.[0-9]+)\s*\)$/i,
			hasAlpha: true,
			radix: 10,
		},
		{
			// rgb(r g b / a)
			pattern:
				/^rgba\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+(1|0|0\.[0-9]+|\.[0-9]+)\s*\)$/i,
			hasAlpha: true,
			radix: 10,
		},
	]

	for (const fmt of formats) {
		const match = fmt.pattern.exec(s)
		if (match) {
			return {
				r: parseInt(match[1], fmt.radix),
				g: parseInt(match[2], fmt.radix),
				b: parseInt(match[3], fmt.radix),
			}
		}
	}

	throw new Error(`[P69 Util] Invalid color string: '${s}'`)
}
