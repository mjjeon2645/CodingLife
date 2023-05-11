Feature('home');

Scenario('test something', ({ I }) => {
  I.amOnPage('/');

  I.see('Home Page');
});
