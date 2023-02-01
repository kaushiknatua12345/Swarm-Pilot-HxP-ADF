import {browser,by,element,logging,protractor} from 'protractor';

//import writer to write data to file to capturing protractor testing screenshots
import {createWriteStream} from 'fs';

var origFn :any= browser.driver.controlFlow().execute;

browser.driver.controlFlow().execute = function() {
  var args = arguments;

  // queue 100ms wait
  origFn.call(browser.driver.controlFlow(), function() {
    return protractor.promise.delayed(100);
  });
  return origFn.apply(browser.driver.controlFlow(), args);
};


describe('App Component E2e Test',()=>{
//setup
beforeEach(()=>{
browser.get('http://localhost:4200');
});

it('Test App Component Heading',()=>{
var findTitle=element(by.id('title'));
let expectedTiltle:any='Protractor Sample';
expect(findTitle.getText()).toEqual(expectedTiltle);
});

it('When Contact Us Link Is Clicked Navigation Happens',()=>{
browser.get(browser.baseUrl); //ie localhost:4200
var contactLink=element(by.id('ContactUs'));
contactLink.click();

let expectedNagitation:any='http://localhost:4200/ContactUs';
let actuaNavigation:any=browser.getCurrentUrl();

expect(actuaNavigation).toEqual(expectedNagitation);

});

afterEach(()=>{
  browser.takeScreenshot().then((png)=>{
  var stream=createWriteStream('SampleProractorCapture.jpg');
  stream.write(new Buffer(png,'base64'));
  stream.end();
  });
})

});

