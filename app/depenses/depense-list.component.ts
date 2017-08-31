import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Depense } from './depense';
import { DepenseService } from './depense.service';

@Component({
    templateUrl: 'app/depenses/depense-list.component.html',
    styleUrls: ['app/depenses/depense-list.component.css']
})
export class DepenseListComponent implements OnInit {

 //   pageTitle: string = 'Depense List';
    listFilter: string;
    errorMessage: string;
    clicked: boolean = false;

    depenses: Depense[];

    constructor(public _route: ActivatedRoute, public _router: Router, private _depenseService: DepenseService) {
    }

    hello(): void {
        console.log('clicked');
        this._router.navigate(['depense/add']);
    }

    remove(id: number): void {
        console.log('inside remove and id = ' + id);
        // get index of object with id:37
        let removeIndex = this.depenses.map(function (item) { return item.id; }).indexOf(id);
        // remove object
        this.depenses.splice(removeIndex, 1);
    }

    ngOnInit(): void {
        this._depenseService.getDepenses().subscribe(depenses => this.depenses = depenses
            , error => this.errorMessage = <any>error);
    }


}