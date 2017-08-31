import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import './rxjs-extensions';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Depense } from './depense';

@Injectable()
export class DepenseService {

    private _depenseUrl = 'api/depenses/depenses.json';

    constructor(private _http: Http) {

    }

    getDepenses(): Observable<Depense[]> {
        return this._http.get(this._depenseUrl).map((response: Response) => <Depense[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getDepense(id: number): Observable<Depense> {
        return this.getDepenses()
            .map((depenses: Depense[]) => depenses.find(p => p.id === id));
    }

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}