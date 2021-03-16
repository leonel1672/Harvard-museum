import { AppPage } from './app.po';
import { browser, logging, by, element } from 'protractor';


describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('the container element is expected to be present when the page is loaded.', () => {
    browser.get(browser.baseUrl);
    let container = element(by.css('app-root .container')).isPresent()
    expect(container).toBe(true);
   });

  it('the last-scroll element is expected to be hidden', () => {
   browser.get(browser.baseUrl);
   let lastScroll = element(by.css('.last-scroll')).isPresent()
   expect(lastScroll).toBe(false);
  });

  it('it is expected to load multiple gallery-card-section', () => {
    element.all(by.css('.gallery-card-section')).then( galleryElements => {
      expect(galleryElements.length).toBeGreaterThan(0)
    })
  })

  it('all items are expected to have a number, title and class.', () => {
    browser.waitForAngular().then(time => {
      if(time){
         let cardNumber = element(by.css('.gallery-description-number')).isPresent();
         let cardTitle = element(by.css('.gallery-description-title')).isPresent();
         let cardClass = element(by.css('.gallery-description-classification')).isPresent();
         expect(cardNumber).toBe(true);
         expect(cardTitle).toBe(true);
         expect(cardClass).toBe(true);
         
      }
    })
  })

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
