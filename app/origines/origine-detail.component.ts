import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs/Subscription';

import { Origine } from './origine';
import { OrigineService } from './origine.service';

@Component({
    templateUrl: 'app/origines/origine-detail.component.html'
})
export class OrigineDetailComponent implements OnInit, OnDestroy {
    pageTitle: string = 'Origine Detail';
    origine: Origine;
    errorMessage: string;
    private sub: Subscription;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _origineService: OrigineService) { }

    ngOnInit(): void {
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                this.getOrigine(id);
            });
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe();
    }

    getOrigine(id: number) {
        this._origineService.getOrigine(id).subscribe(
            origine => this.origine = origine,
            error => this.errorMessage = <any>error);
    }

    onBack(): void {
            this._router.navigate(['./origines']);
    }

}