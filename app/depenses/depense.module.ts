
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DepenseListComponent } from './depense-list.component';
import { DepenseDetailComponent } from './depense-detail.component';
import { DepenseDetailGuard } from './depense-detail-guard.service';
import { DepenseEditGuard } from './depense-edit-guard.service';
import { DepenseComponent } from './depense.component';

import { DepenseFilterPipe } from './depense-filter.pipe';
import { DepenseService } from './depense.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'depenses', component: DepenseListComponent },
            { path: 'depenses/add', component: DepenseComponent },
            { path: 'depenses/:id', canActivate: [DepenseDetailGuard], component: DepenseDetailComponent },
            { path: 'depenses/edit/:id', canActivate: [DepenseEditGuard], component: DepenseComponent }
        ])
    ],
    declarations: [DepenseListComponent, DepenseDetailComponent, DepenseFilterPipe, DepenseComponent],
    providers: [DepenseService, DepenseDetailGuard, DepenseEditGuard]
})
export class DepenseModule { }