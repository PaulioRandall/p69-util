import { stringifyRGBs } from './colors.js'

describe('stringifyRGBs', () => {
	test('Passes given vald mapping', () => {
		const rgbMap = {
			red: [255, 0, 0],
			green: [0, 255, 0],
			blue: [0, 0, 255],
			alpha: [0, 0, 0, 0.5],
		}

		const exp = {
			red: 'rgb(255, 0, 0)',
			green: 'rgb(0, 255, 0)',
			blue: 'rgb(0, 0, 255)',
			alpha: 'rgba(0, 0, 0, 0.5)',
		}

		const act = stringifyRGBs(rgbMap)
		expect(act).toEqual(exp)
	})

	test('Fails given invalid RGB value', () => {
		const rgbMap = {
			bad: [0, 0],
		}

		const f = () => stringifyRGBs(rgbMap)
		expect(f).toThrow(Error)
	})
})
