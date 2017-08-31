import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class DepenseEditGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[2].path;
        console.log('route.url ' + route.url);
        console.log('id = ' + id);
        if (isNaN(id) || id < 1) {
            alert('Invalid deoense Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/depenses']);
            // abort current navigation
            return false;
        };
        return true;
    }
}