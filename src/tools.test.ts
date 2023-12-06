import { describe, it, expect } from 'vitest';
import { capitalizeFirstLetter } from './tools';

describe('capitalizeFirstLetter', () => {
	it('uppercases and lowercases correct letters', () => {
		expect(capitalizeFirstLetter('test')).toBe('Test');
		expect(capitalizeFirstLetter('two words')).toBe('Two words');
		expect(capitalizeFirstLetter('AAA')).toBe('Aaa');
	})
	it('handles edges case', () => {
		expect(capitalizeFirstLetter('')).toBe('');
		expect(capitalizeFirstLetter('       ')).toBe('');
		expect(capitalizeFirstLetter(' and')).toBe('And');
	})
});