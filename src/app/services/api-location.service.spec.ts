import { TestBed } from '@angular/core/testing';

import { ApiLocationService } from './api-location.service';

describe('ApiLocationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({});

    });

    it('should be created', () => {
        const service: ApiLocationService = TestBed.get(ApiLocationService);
        expect(service).toBeTruthy();
    });

    it('should return an api location', () => {
        const service: ApiLocationService = TestBed.get(ApiLocationService);
        // tslint:disable-next-line: no-string-literal
        expect(service['_apiLocation']).toBe('http://' + service['_ip'] + ':8080');
    });

    it('should return the _apiLocation trough the apiLocation gettter', () => {
        const service: ApiLocationService = TestBed.get(ApiLocationService);
        const apiLocation = service.apiLocation;
        // tslint:disable-next-line: no-string-literal
        expect(apiLocation).toBe('http://' + service['_ip'] + ':8080');
    });
});
