import { colorMap } from './colors.js'

// HEX RGB
// 11 = 17
// 22 = 34
// 33 = 51

describe('Colors.js', () => {
	describe('colorMap()', () => {
		test('passes given valid color map', () => {
			const act = colorMap({
				a: '#112233',
				b: 'rgb(51 34 17)',
			})

			expect(act).toEqual({
				a: {
					'': '#112233',
					hex: '#112233',
					rgb: 'rgb(17 34 51)',
					raw: [17, 34, 51],
				},
				b: {
					'': '#332211',
					hex: '#332211',
					rgb: 'rgb(51 34 17)',
					raw: [51, 34, 17],
				},
			})
		})

		test('passes given specific default format', () => {
			const act = colorMap({ a: '#112233' }, { defaultFormat: 'rgb' })

			expect(act).toEqual({
				a: {
					'': 'rgb(17 34 51)',
					hex: '#112233',
					rgb: 'rgb(17 34 51)',
					raw: [17, 34, 51],
				},
			})
		})

		test('passes given specific formats', () => {
			const act = colorMap({ a: '#112233' }, { formats: ['', 'rgb'] })

			expect(act).toEqual({
				a: {
					'': '#112233',
					rgb: 'rgb(17 34 51)',
				},
			})
		})

		test('passes given specific formats and default format', () => {
			const act = colorMap(
				{ a: '#112233' },
				{
					formats: ['', 'hex'],
					defaultFormat: 'rgb',
				}
			)

			expect(act).toEqual({
				a: {
					'': 'rgb(17 34 51)',
					hex: '#112233',
				},
			})
		})
	})
})
