import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { DepenseService } from './depense.service';
import { Depense } from './Depense';

@Component({
    templateUrl: 'app/depenses/depense.component.html'
})
export class DepenseComponent implements OnInit, OnDestroy {

    depense: Depense;
    submitted: boolean = false;
    sub: any;
    errorMessage: string;
    depenseData: string;

    constructor(private _route: ActivatedRoute,
        private _router: Router,
        private _depenseService: DepenseService) { }

    ngOnInit(): void {
        this.depense = new Depense(10, '', 10);
        this.sub = this._route.params.subscribe(
            params => {
                let id = +params['id'];
                if (id) {
                    this.getDepense(id);
                }
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

    save(depenseForm: any) {
        this.submitted = true;
        if (!depenseForm.valid) {
            console.log('form is invalid' + JSON.stringify(this.depense));
            return;
        }
        console.log('form is valid' + JSON.stringify(this.depense));
        this.depenseData = JSON.stringify(this.depense);
    }
    onBack(): void {
        this._router.navigate(['./depenses']);
    }

}