'use strict';
import searchModule, { SearchComponent } from './index.js';

describe('search Component', () => {
  var ctrl;

  beforeEach(window.module(searchModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(SearchComponent.selector, {
      
    });
  }));

  it('should do what it is supposed to do', () => {
    const expected = '';
    const actual = '';
    expect(actual).toMatch(expected);
  });

});
