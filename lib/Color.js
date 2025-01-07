export default class Color {
	constructor(init = { r: 0, g: 0, b: 0, a: 0 }) {
		if (typeof init === 'string') {
			init = parseColorString(init)
		}

		const { r, g, b, a } = init

		this.r = r ? r : 0
		this.g = g ? g : 0
		this.b = b ? b : 0
		this.a = a ? a : 0
	}

	toArray(appendAlpha = null) {
		const array = [this.r, this.g, this.b]

		if (appendAlpha || (appendAlpha === null && this.a)) {
			array.push(this.a)
		}

		return array
	}

	toString() {
		const mapComponent = (c) => c.toString(16).padStart(2, '0')

		const hex = {
			r: mapComponent(this.r),
			g: mapComponent(this.g),
			b: mapComponent(this.b),
			a: this.a ? mapComponent(this.a) : '',
		}

		return `#${hex.r}${hex.g}${hex.b}${hex.a}`
	}

	toRgbString() {
		if (this.a) {
			return `rgba(${this.r} ${this.g} ${this.b} / ${this.a})`
		}

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
				/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i,
			hasAlpha: true,
			radix: 10,
		},
		{
			// rgb(r g b / a)
			pattern:
				/^rgba\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+(\d{1,3})\s*\)$/i,
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
				a: fmt.hasAlpha ? parseInt(match[4], fmt.radix) : 0,
			}
		}
	}

	throw new Error(`[P69 Util] Invalid color string: '${s}'`)
}
