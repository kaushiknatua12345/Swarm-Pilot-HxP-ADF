import { browser, by, element, logging, protractor } from 'protractor';
import { createWriteStream } from 'fs';

var origFn :any= browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });

  return origFn.apply(browser.driver.controlFlow(), args);
};

fdescribe('Protractor Demo App', function() {

  beforeEach(function() {
    browser.get('http://localhost:4200/');
  });

  afterEach(() => {
    browser.takeScreenshot().then((png) =>{
    var stream = createWriteStream("samplescreenshot.png"); /** change the png file name as per your choice  */
    stream.write(new Buffer(png, 'base64'));
    stream.end;
    });
    });

  it('should have a title', function() {
    var findIitle=element(by.id('pageTitle'));
    let title:any='Hyland HRM Portal';
    expect(findIitle.getText()).toEqual(title);
  });

  it('click on about us link', async () => {
    browser.get(browser.baseUrl);

    var aboutUsLink = element(by.id('AboutUs'));
    aboutUsLink.click();

    let expected:any = 'http://localhost:4200/AboutUs';
    let actual = browser.getCurrentUrl();

    expect(actual).toEqual(expected);

  });

  it('click on employee registration link', async () => {
    browser.get(browser.baseUrl);

    var aboutUsLink = element(by.id('Registration'));
    aboutUsLink.click();

    let expected:any = 'http://localhost:4200/Registration';
    let actual = browser.getCurrentUrl();

    expect(actual).toEqual(expected);

  });


});
