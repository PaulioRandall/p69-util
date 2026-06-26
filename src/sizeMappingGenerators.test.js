import sizeMappingGenerators from './sizeMappingGenerators.js'

describe('sizeMappingGenerators.js', () => {
	describe('map()', () => {
		test('passes given valid size map', () => {
			const act = sizeMappingGenerators.generateSizeMap({
				sm: 12,
				md: 16,
				lg: 20,
			})

			expect(act).toEqual({
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
			})
		})

		test('passes given specific default format', () => {
			const act = sizeMappingGenerators.generateSizeMap(
				{
					md: 16,
				},
				{
					defaultFormat: 'rem',
				}
			)

			expect(act).toEqual({
				md: {
					'': '1rem',
					px: '16px',
					em: '1em',
					rem: '1rem',
				},
			})
		})

		test('passes given specific formats', () => {
			const act = sizeMappingGenerators.generateSizeMap(
				{
					md: 16,
				},
				{
					formats: ['', 'rem'],
				}
			)

			expect(act).toEqual({
				md: {
					'': '16px',
					rem: '1rem',
				},
			})
		})

		test('passes given specific formats and default format', () => {
			const act = sizeMappingGenerators.generateSizeMap(
				{
					md: 16,
				},
				{
					formats: ['', 'rem'],
					defaultFormat: 'em',
				}
			)

			expect(act).toEqual({
				md: {
					'': '1em',
					rem: '1rem',
				},
			})
		})
	})
})
