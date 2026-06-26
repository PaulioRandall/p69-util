import generateVariables from './generateVariables.js'

describe('generateVariables.js', () => {
	describe('generate()', () => {
		test('passes given valid theme', () => {
			const act = generateVariables({
				color: {
					primary: '#0000FF',
					secondary: '#FF0000',
				},
				font: {
					size: {
						sm: '0.8rem',
						md: '1rem',
						lg: '1.2rem',
					},
				},
			})

			expect(act).toEqual(
				[
					'--color-primary: #0000FF;',
					'--color-secondary: #FF0000;',
					'--font-size-sm: 0.8rem;',
					'--font-size-md: 1rem;',
					'--font-size-lg: 1.2rem;',
				].join('\n')
			)
		})

		test('passes given valid prefix options', () => {
			const act = generateVariables(
				{
					color: {
						primary: '#0000FF',
						secondary: '#FF0000',
					},
					font: {
						size: {
							sm: '0.8rem',
							md: '1rem',
							lg: '1.2rem',
						},
					},
				},
				{
					prefix: ' \t',
					prefixFirst: true,
				}
			)

			expect(act).toEqual(
				[
					' \t--color-primary: #0000FF;',
					' \t--color-secondary: #FF0000;',
					' \t--font-size-sm: 0.8rem;',
					' \t--font-size-md: 1rem;',
					' \t--font-size-lg: 1.2rem;',
				].join('\n')
			)
		})
	})
})
