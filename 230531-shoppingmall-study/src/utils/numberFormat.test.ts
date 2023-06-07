import numberFormat from './numberFormat';

test('numberFormat', () => {
  expect(numberFormat(1)).toBe('1');
  expect(numberFormat(1000)).toBe('1,000');
  expect(numberFormat(1234567)).toBe('1,234,567');
});
