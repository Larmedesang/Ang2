import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
// import './rxjs-extensions';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

import { Origine } from './origine';

@Injectable()
export class OrigineService {

    private _origineUrl = 'api/origines/origines.json';

    constructor(private _http: Http) {

    }

    getOrigines(): Observable<Origine[]> {
        return this._http.get(this._origineUrl).map((response: Response) => <Origine[]>response.json())
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }

    getOrigine(id: number): Observable<Origine> {
        return this.getOrigines()
            .map((origines: Origine[]) => origines.find(p => p.id === id));
    }

    //Ajout RBU
 //   getAll() {
 //       return this.http.get('/api/users', this.jwt()).map((response: Response) => response.json());
 //   }

 //   getById(id: number) {
 //       return this.http.get('/api/users/' + id, this.jwt()).map((response: Response) => response.json());
 //   }

    
 //   create(user: User) {
 //       return this.http.post('/api/users', user, this.jwt()).map((response: Response) => response.json());
 //   }

 //   update(user: User) {
 //       return this.http.put('/api/users/' + user.id, user, this.jwt()).map((response: Response) => response.json());
 //   }

    delete(id: number): Observable<Origine> {
        return this.delete(id);
    }

 //    return this.http.delete('/api/users/' + id, this.jwt()).map((response: Response) => response.json());

    private handleError(error: Response) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}