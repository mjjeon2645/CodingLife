Feature('Product List');

Scenario('All products', ({ I }) => {
  I.amOnPage('/');

  I.click('Products');

  I.see('CBCL 핀턱자수후드');
});

Scenario('Category', ({ I }) => {
  I.amOnPage('/');

  I.click('top');

  I.see('CBCL 배색 후드');
  I.dontSee('CBCL 핀턱자수후드');
});
