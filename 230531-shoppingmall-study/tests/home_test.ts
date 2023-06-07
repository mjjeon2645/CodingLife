Feature('home');

Scenario('test homepage', ({ I }) => {
  I.amOnPage('/');

  I.see('Hello, world!');
});
