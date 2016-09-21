'use strict';
import loader-overlayModule, { LoaderOverlayComponent } from './index.js';

describe('loader-overlay Component', () => {
  var ctrl;

  beforeEach(window.module(loader-overlayModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(LoaderOverlayComponent.selector, {
      
    });
  }));

  it('should do what it is supposed to do', () => {
    const expected = '';
    const actual = '';
    expect(actual).toMatch(expected);
  });

});
