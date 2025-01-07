import Colors from './Colors.js'

// HEX RGB
// 11 = 17
// 22 = 34
// 33 = 51
// AA = 170

describe('Colors.js', () => {
	describe('map()', () => {
		test('passes given valid color map', () => {
			const act = Colors.map({
				a: '#112233',
				b: 'rgba(51 34 17 / 170)',
			})

			expect(act).toEqual({
				a: {
					'': '#112233',
					hex: '#112233',
					rgb: 'rgb(17 34 51)',
					raw: [17, 34, 51],
					rawa: [17, 34, 51, 0],
				},
				b: {
					'': '#332211aa',
					hex: '#332211aa',
					rgb: 'rgba(51 34 17 / 170)',
					raw: [51, 34, 17],
					rawa: [51, 34, 17, 170],
				},
			})
		})

		test('passes given specific default format', () => {
			const act = Colors.map({ a: '#112233' }, { defaultFormat: 'rgb' })

			expect(act).toEqual({
				a: {
					'': 'rgb(17 34 51)',
					hex: '#112233',
					rgb: 'rgb(17 34 51)',
					raw: [17, 34, 51],
					rawa: [17, 34, 51, 0],
				},
			})
		})

		test('passes given specific formats', () => {
			const act = Colors.map({ a: '#112233' }, { formats: ['', 'rgb'] })

			expect(act).toEqual({
				a: {
					'': '#112233',
					rgb: 'rgb(17 34 51)',
				},
			})
		})

		test('passes given specific formats and default format', () => {
			const act = Colors.map(
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
