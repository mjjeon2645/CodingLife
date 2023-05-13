Feature('Product Detail');

Scenario('Product not found', ({ I }) => {
  I.amOnPage('/products/xxx');

  I.see('Error!');
});
