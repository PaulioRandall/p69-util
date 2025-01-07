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

	toRgbString() {
		if (this.a) {
			return `rgba(${this.r} ${this.g} ${this.b} / ${this.a})`
		}

		return `rgb(${this.r} ${this.g} ${this.b})`
	}

	toHexString() {
		const mapComponent = (c) => c.toString(16).padStart(2, '0')

		const hex = {
			r: mapComponent(this.r),
			g: mapComponent(this.g),
			b: mapComponent(this.b),
			a: this.a ? mapComponent(this.a) : '',
		}

		return `#${hex.r}${hex.g}${hex.b}${hex.a}`
	}
}

const parseColorString = (s) => {
	s = s.trim()
	let match = null

	// #RRGGBB
	const RGB6 = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i

	// #RGB
	const RGB3 = /^#([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/i

	// #RRGGBBAA
	const RGBA6 = /^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i

	// #RGBA
	const RGBA4 = /^#([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})([0-9a-f]{1})$/i

	// rgb(r, g, b)
	const RGB_CSV = /^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i

	// rgb(r g b)
	const RGB_SSV = /^rgb\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*\)$/i

	// rgb(r, g, b, a)
	const RGBA_CSV =
		/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/i

	// rgb(r g b / a)
	const RGBA_Solidus =
		/^rgba\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s+\/\s+(\d{1,3})\s*\)$/i

	match = RGB6.exec(s)
	if (match) {
		return {
			r: parseInt(match[1], 16),
			g: parseInt(match[2], 16),
			b: parseInt(match[3], 16),
			a: 0,
		}
	}

	match = RGB3.exec(s)
	if (match) {
		return {
			r: parseInt(match[1] + match[1], 16),
			g: parseInt(match[2] + match[2], 16),
			b: parseInt(match[3] + match[3], 16),
			a: 0,
		}
	}

	match = RGBA6.exec(s)
	if (match) {
		return {
			r: parseInt(match[1], 16),
			g: parseInt(match[2], 16),
			b: parseInt(match[3], 16),
			a: parseInt(match[4], 16),
		}
	}

	match = RGBA4.exec(s)
	if (match) {
		return {
			r: parseInt(match[1] + match[1], 16),
			g: parseInt(match[2] + match[2], 16),
			b: parseInt(match[3] + match[3], 16),
			a: parseInt(match[4] + match[4], 16),
		}
	}

	match = RGB_CSV.exec(s)
	if (match) {
		return {
			r: parseInt(match[1]),
			g: parseInt(match[2]),
			b: parseInt(match[3]),
			a: 0,
		}
	}

	match = RGB_SSV.exec(s)
	if (match) {
		return {
			r: parseInt(match[1]),
			g: parseInt(match[2]),
			b: parseInt(match[3]),
			a: 0,
		}
	}

	match = RGBA_CSV.exec(s)
	if (match) {
		return {
			r: parseInt(match[1]),
			g: parseInt(match[2]),
			b: parseInt(match[3]),
			a: parseInt(match[4]),
		}
	}

	match = RGBA_Solidus.exec(s)
	if (match) {
		return {
			r: parseInt(match[1]),
			g: parseInt(match[2]),
			b: parseInt(match[3]),
			a: parseInt(match[4]),
		}
	}

	throw new Error(`[P69 Util] Invalid color string: '${s}'`)
}
