import {AppPage} from './app.po';
import {browser} from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;
  let username;
  let password;
  let submit;
  let currentUser;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo('/');
    expect(page.getParagraphText()).toEqual('Welcome to Studentis');
  });

  it('should login user', () => {
    page.navigateTo('/login');

    // get inputs
    username = page.getElementById('username');
    password = page.getElementById('password');
    submit = page.getElementById('submit');

    // set value for inputs
    username.sendKeys('test');
    password.sendKeys('test');

    // submit login form
    submit.click();

    // on successful login user should be stored in local storage
    currentUser = browser.executeScript('return window.localStorage.getItem("currentUser");');
    expect(currentUser).toBeTruthy();
  });
});
