import { browser, element, by } from 'protractor';

export class CRMPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('SBC-root h1')).getText();
  }
}
