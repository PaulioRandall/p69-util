import Color from './Color.js'

describe('Color.js', () => {
	describe('constructor()', () => {
		test('passes given valid RGB', () => {
			const act = new Color('rgb(1,2,3)')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
		})

		test('passes given untrimmed RGB', () => {
			const act = new Color('			rgb(1,2,3)  		')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
		})

		test('passes given valid RGBA', () => {
			const act = new Color('rgba(1,2,3,0.5)')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
		})

		test('passes given valid RGB SSV', () => {
			const act = new Color('rgb(  1 	2 	3   	)')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
		})

		test('passes given valid RGBA Solidus', () => {
			const act = new Color('rgba(  1 	2 	3   	/  	0.5 		 )')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
		})

		test('fails given invalid RGB', () => {
			const f = () => Color('rgb(1,2 3)')
			expect(f).toThrow(Error)
		})

		test('fails given invalid RGB solidus', () => {
			const f = () => Color('rgba(1 2 3 / )')
			expect(f).toThrow(Error)
		})

		test('fails given missing "rgb" prefix', () => {
			const f = () => Color.fromRgb('(1,2,3)')
			expect(f).toThrow(Error)
		})

		test('passes given valid Hex', () => {
			const act = new Color('#112233')
			expect(act.r).toEqual(parseInt(11, 16))
			expect(act.g).toEqual(parseInt(22, 16))
			expect(act.b).toEqual(parseInt(33, 16))
		})

		test('passes given valid Hex with alpha', () => {
			const act = new Color('#11223344')
			expect(act.r).toEqual(parseInt(11, 16))
			expect(act.g).toEqual(parseInt(22, 16))
			expect(act.b).toEqual(parseInt(33, 16))
		})
	})

	describe('toArray()', () => {
		test('returns RGB array', () => {
			const color = new Color({ r: 1, g: 2, b: 3 })
			expect(color.toArray()).toMatchObject([1, 2, 3])
		})
	})

	describe('toString()', () => {
		test('returns RGB hex string (small values)', () => {
			const color = new Color({ r: 1, g: 2, b: 3 })
			expect(color.toString()).toEqual('#010203')
		})

		test('returns RGB hex string (large values)', () => {
			const color = new Color({ r: 170, g: 187, b: 204 })
			expect(color.toString()).toEqual('#aabbcc')
		})
	})

	describe('toRgbString()', () => {
		test('returns CSS RGB string', () => {
			const color = new Color({ r: 1, g: 2, b: 3 })
			expect(color.toRgbString()).toEqual('rgb(1 2 3)')
		})
	})
})
