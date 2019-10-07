import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ApiLocationService {

    // tslint:disable-next-line: variable-name
    private _ip = '192.168.0.57';
    // tslint:disable-next-line: variable-name
    private _apiLocation = '';

    constructor() {
        this._apiLocation = 'http://' + this._ip + ':8080';
    }

    get apiLocation(): string {
        return this._apiLocation;
    }
}
