import { expect, describe, it } from 'vitest';
import { convertTimeToHundredths, convertToTimeString } from './competitors';

describe('convertTimeToHundredths', () => {
	it('converts a string with only seconds with decimal to hundredths', () => {
		expect(convertTimeToHundredths('32.93')).toBe(3293);
	});

	it('converts a string with minutes, seconds with 2 decimal places to hundredths', () => {
		expect(convertTimeToHundredths('1:28.85')).toBe(8885);
	});

	it('converts a string with minutes, seconds with 1 decimal place to hundredths', () => {
		expect(convertTimeToHundredths('1:15.50')).toBe(7550);
	});

	it('converts a string with minutes, seconds with no decimal places to hundredths', () => {
		expect(convertTimeToHundredths('1:15')).toBe(7500);
	});

	it('converts a string with minutes, seconds with no decimal places to hundredths', () => {
		expect(convertTimeToHundredths('00:07.5')).toBe(750);
	});

	it('converts a string with minutes, seconds with no decimal places to hundredths', () => {
		expect(convertTimeToHundredths('00:07')).toBe(700);
	});
});

describe('convertToTimeString', () => {
	console.log(convertToTimeString(452300)); // Should output 01:15:23
	it('converts a number to a string with minutes, seconds with no decimal places', () => {
		expect(convertToTimeString(452300)).toBe('01:15:23');
	});

	it('converts a number to a string with minutes, seconds with a decimal places', () => {
		expect(convertToTimeString(9330)).toBe('00:01:33.3');
	});

	it('converts a number to a string with seconds and decimal places', () => {
		expect(convertToTimeString(750)).toBe('00:00:07.5');
	});

	it('converts a number to a string with only a decimal places', () => {
		expect(convertToTimeString(75)).toBe('00:00:00.7');
	});

	it('converts a number to a string with only a minute', () => {
		expect(convertToTimeString(700)).toBe('00:00:07');
	});
});
