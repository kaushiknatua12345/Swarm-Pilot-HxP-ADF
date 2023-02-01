import { browser, by, element, logging, protractor } from 'protractor';
//import {RegistrationComponent} from '../../src/app/registration/registration.component';
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

fdescribe('Registration Page', () => {

  beforeEach(() => {
    beforeEach(function() {
      browser.get('http://localhost:4200/Registration');
  });
  });



    it('should have a title', function() {

      it('should have a title', function() {
        var findIitle=element(by.id('pageTitle'));
        let title:any='New Employee Registration Form';
        expect(findIitle.getText()).toEqual(title);
      });
    });



    it('should provide display failure messages', function() {

      element(by.name('EmployeeName')).sendKeys('');
      element(by.name('EmailId')).sendKeys('');
      element(by.name('EmployeeCode')).sendKeys('');
      expect(element(by.id('submitBtn')).getAttribute('disabled')).toBeTruthy();
      browser.takeScreenshot().then((png) =>{
        var stream = createWriteStream("RegistrationPageValidationErrors.png"); /** change the png file name as per your choice  */
        stream.write(new Buffer(png, 'base64'));
        stream.end;
        });

    });

    ;


    it('should provide display success messages', function() {

      element(by.name('EmployeeName')).sendKeys('Kaushik');
      element(by.name('EmailId')).sendKeys('kaushik@gmail.com');
      element(by.name('EmployeeCode')).sendKeys('123789');

      element(by.id('submitBtn')).click();

      let expectedData:any='Form Submitted Successfully';

      expect(element(by.id('success-msg')).getText()).
          toEqual(expectedData);

          browser.takeScreenshot().then((png) =>{
            var stream1 = createWriteStream("RegistrationSuccess.png"); /** change the png file name as per your choice  */
            stream1.write(new Buffer(png, 'base64'));
            stream1.end;
            });
          });
    });







