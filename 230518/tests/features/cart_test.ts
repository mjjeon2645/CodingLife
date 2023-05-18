Feature('Cart');

Scenario('Empty Cart', ({ I }) => {
  I.amOnPage('/');

  I.click('Cart');

  I.see('장바구니가 비었습니다');
});
