import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';

@Injectable()
export class OrigineEditGuard implements CanActivate {
    constructor(private _router: Router) { }

    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[2].path;
        console.log('route.url ' + route.url);
        console.log('id = ' + id);
        if (isNaN(id) || id < 1) {
            alert('Invalid origine Id');
            // start a new navigation to redirect to list page
            this._router.navigate(['/origines']);
            // abort current navigation
            return false;
        };
        return true;
    }
}