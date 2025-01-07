import Color from './Color.js'

describe('Color.js', () => {
	describe('constructor', () => {
		test('passes given valid RGB', () => {
			const act = new Color('rgb(1,2,3)')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
			expect(act.a).toEqual(0)
		})

		test('passes given untrimmed RGB', () => {
			const act = new Color('			rgb(1,2,3)  		')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
			expect(act.a).toEqual(0)
		})

		test('passes given valid RGBA', () => {
			const act = new Color('rgba(1,2,3,4)')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
			expect(act.a).toEqual(4)
		})

		test('passes given valid RGB SSV', () => {
			const act = new Color('rgb(  1 	2 	3   	)')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
			expect(act.a).toEqual(0)
		})

		test('passes given valid RGBA Solidus', () => {
			const act = new Color('rgba(  1 	2 	3   	/  	4 		 )')
			expect(act.r).toEqual(1)
			expect(act.g).toEqual(2)
			expect(act.b).toEqual(3)
			expect(act.a).toEqual(4)
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
			expect(act.a).toEqual(parseInt(0, 16))
		})

		test('passes given valid Hex with alpha', () => {
			const act = new Color('#11223344')
			expect(act.r).toEqual(parseInt(11, 16))
			expect(act.g).toEqual(parseInt(22, 16))
			expect(act.b).toEqual(parseInt(33, 16))
			expect(act.a).toEqual(parseInt(44, 16))
		})

		test('passes given valid short Hex', () => {
			const act = new Color('#123')
			expect(act.r).toEqual(parseInt(11, 16))
			expect(act.g).toEqual(parseInt(22, 16))
			expect(act.b).toEqual(parseInt(33, 16))
			expect(act.a).toEqual(parseInt(0, 16))
		})

		test('passes given valid short Hex with alpha', () => {
			const act = new Color('#1234')
			expect(act.r).toEqual(parseInt(11, 16))
			expect(act.g).toEqual(parseInt(22, 16))
			expect(act.b).toEqual(parseInt(33, 16))
			expect(act.a).toEqual(parseInt(44, 16))
		})
	})
})
