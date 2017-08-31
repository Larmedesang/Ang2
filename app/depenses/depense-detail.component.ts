import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Depense } from './depense';
import { DepenseService } from './depense.service';

@Component({
    templateUrl: 'app/depenses/depense-detail.component.html'
})
export class DepenseDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Depense Detail';
    depense: Depense;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _depenseService: DepenseService) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getDepense(id);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getDepense(id: number) {
        this._depenseService.getDepense(id).subscribe(
            depense => this.depense = depense,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
            this._router.navigate(['./depenses']);
    }

}