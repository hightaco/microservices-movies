import { Selector } from 'testcafe';

fixture('/login').page('http://localhost:3007');

test(`users should be able to register new account`, async (t) => {

  // selectors
  const registeredMessage = Selector('div').withText(
    'You successfully registered! Welcome!')
  const logoutMessage = Selector('div').withText('You are now logged out')

  await t
    .navigateTo('http://localhost:3007')
    .click(Selector('a[href="/register"]'))
    .typeText('input[name="username"]', 'foo')
    .typeText('input[name="password"]', 'bar')
    .click(Selector('button[type="submit"]'));

  await t
    .expect(registeredMessage.exists).ok()
    .click(Selector('a').withText('Logout'))
    .expect(logoutMessage.exists).ok()

});
