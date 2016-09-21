'use strict';
import BooksMockJson from '../../../tests/mocks/books.mock';
import CoreServicesModule from './index.js';

describe('Some Service', () => {
    let httpBackend, someService;

    beforeEach(window.module(CoreServicesModule.name));

    beforeEach(window.inject(($controller, $injector, $httpBackend) => {
        someService = $injector.get('BooksService');
        httpBackend = $httpBackend;
        httpBackend
            .whenGET(/books/)
            .respond(BooksMockJson);
    }));

    it('should have a fetch function', () => {
        expect(someService.fetch).toBeDefined();
    });

    it('should open a get request when fetch', () => {
        someService.fetch();
        httpBackend.flush();
        httpBackend.expectGET();
    });
});
