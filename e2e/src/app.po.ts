import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo(path) {
    return browser.get(path);
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  getElementById(id) {
    return element(by.id(id));
  }
}
