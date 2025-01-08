import { sizeMap, absSizeMap } from './sizes.js'

describe('Sizes.js', () => {
	describe('sizeMap(map, userOptions)', () => {
		test('passes given valid size map', () => {
			const act = sizeMap({
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

		test('passes given custom pixels per rem', () => {
			const act = sizeMap(
				{
					md: 16,
				},
				{
					pxPerRem: 12,
				}
			)

			expect(act).toEqual({
				md: {
					'': '16px',
					px: '16px',
					em: '1.333em',
					rem: '1.333rem',
				},
			})
		})

		test('passes given custom default format', () => {
			const act = sizeMap(
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

		test('passes given custom formats', () => {
			const act = sizeMap(
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

		test('passes given custom formats and default format', () => {
			const act = sizeMap(
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

	describe('absSizeMap(map, userOptions)', () => {
		test('passes given valid size map', () => {
			const act = absSizeMap({
				sm: 12,
				md: 16,
				lg: 20,
			})

			expect(act).toEqual({
				sm: {
					'': '12px',
					px: '12px',
					pt: '9pt',
					pc: '0.75pc',
					in: '0.125in',
					cm: '0.32cm',
					mm: '3.2mm',
				},
				md: {
					'': '16px',
					px: '16px',
					pt: '12pt',
					pc: '1pc',
					in: '0.167in',
					cm: '0.42cm',
					mm: '4.2mm',
				},
				lg: {
					'': '20px',
					px: '20px',
					pt: '15pt',
					pc: '1.25pc',
					in: '0.208in',
					cm: '0.53cm',
					mm: '5.3mm',
				},
			})
		})

		test('passes given custom pixels per inch', () => {
			const act = absSizeMap(
				{
					md: 16,
				},
				{
					pxPerInch: 48,
				}
			)

			expect(act).toEqual({
				md: {
					'': '16px',
					px: '16px',
					pt: '24pt',
					pc: '2pc',
					in: '0.333in',
					cm: '0.85cm',
					mm: '8.5mm',
				},
			})
		})

		test('passes given custom default format', () => {
			const act = absSizeMap(
				{
					md: 16,
				},
				{
					defaultFormat: 'pt',
				}
			)

			expect(act).toEqual({
				md: {
					'': '12pt',
					px: '16px',
					pt: '12pt',
					pc: '1pc',
					in: '0.167in',
					cm: '0.42cm',
					mm: '4.2mm',
				},
			})
		})

		test('passes given custom formats', () => {
			const act = absSizeMap(
				{
					md: 16,
				},
				{
					formats: ['', 'mm'],
				}
			)

			expect(act).toEqual({
				md: {
					'': '16px',
					mm: '4.2mm',
				},
			})
		})

		test('passes given custom formats and default format', () => {
			const act = absSizeMap(
				{
					md: 16,
				},
				{
					formats: ['', 'mm'],
					defaultFormat: 'cm',
				}
			)

			expect(act).toEqual({
				md: {
					'': '0.42cm',
					mm: '4.2mm',
				},
			})
		})
	})
})
