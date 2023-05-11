import numberFormat from './numberFormat';

test('numberFormat', () => {
  expect(numberFormat(100)).toBe('100');
  expect(numberFormat(1000)).toBe('1,000');
  expect(numberFormat(12345678)).toBe('12,345,678');
});
