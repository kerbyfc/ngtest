'use strict';
import bookModule, { BookComponent } from './index.js';

describe('book Component', () => {
  var ctrl;

  beforeEach(window.module(bookModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(BookComponent.selector, {
      
    });
  }));

  it('should do what it is supposed to do', () => {
    const expected = '';
    const actual = '';
    expect(actual).toMatch(expected);
  });

});
