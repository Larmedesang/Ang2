import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { OrigineService } from './origine.service';
import { Origine } from './Origine';

@Component({
    templateUrl: 'app/origines/origine.component.html'
})
export class OrigineComponent implements OnInit, OnDestroy {

    origine: Origine;
    submitted: boolean = false;
    sub: any;
    errorMessage: string;
    origineData: string;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _origineService: OrigineService) { }

    ngOnInit(): void {
        this.origine = new Origine(10, '', 10);
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                if (id) {
                    this.getOrigine(id);
                }
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

    save(origineForm: any) {
        this.submitted = true;
        if (!origineForm.valid) {
            console.log('form is invalid' + JSON.stringify(this.origine));
            return;
        }
        console.log('form is valid' + JSON.stringify(this.origine));
        this.origineData = JSON.stringify(this.origine);
    }
    onBack(): void {
        this._router.navigate(['./origines']);
    }

}