import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Origine } from './origine';
import { OrigineService } from './origine.service';

@Component({
    templateUrl: 'app/origines/origine-list.component.html',
    styleUrls: ['app/origines/origine-list.component.css']
})
export class OrigineListComponent implements OnInit {

 //   pageTitle: string = 'Origine List';
    listFilter: string;
    errorMessage: string;
    clicked: boolean = false;

    origines: Origine[];

    constructor(public _route: ActivatedRoute, public _router: Router, private _origineService: OrigineService) {
    }

    hello(): void {
        console.log('clicked');
        this._router.navigate(['origine/add']);
    }

    remove(id: number): void {
        console.log('inside remove and id = ' + id);
        // get index of object with id:37
        let removeIndex = this.origines.map(function (item) { return item.id; }).indexOf(id);
        // remove object
        this.origines.splice(removeIndex, 1);

                this._origineService.delete(id);
    }
    

    ngOnInit(): void {
        this._origineService.getOrigines().subscribe(origines => this.origines = origines
            , error => this.errorMessage = <any>error);
    }


}