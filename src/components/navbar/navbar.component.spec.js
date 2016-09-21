'use strict';
import navbarModule, { NavbarComponent } from './index.js';

describe('navbar Component', () => {
  var ctrl;

  beforeEach(window.module(navbarModule));

  beforeEach(window.inject(($componentController) => {
    ctrl = $componentController(NavbarComponent.selector, {
      
    });
  }));

  it('should do what it is supposed to do', () => {
    const expected = '';
    const actual = '';
    expect(actual).toMatch(expected);
  });

});
