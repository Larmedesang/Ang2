
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrigineListComponent } from './origine-list.component';
import { OrigineDetailComponent } from './origine-detail.component';
import { OrigineDetailGuard } from './origine-detail-guard.service';
import { OrigineEditGuard } from './origine-edit-guard.service';
import { OrigineComponent } from './origine.component';

import { OrigineFilterPipe } from './origine-filter.pipe';
import { OrigineService } from './origine.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            { path: 'origines', component: OrigineListComponent },
            { path: 'origines/add', component: OrigineComponent },
            { path: 'origines/:id', canActivate: [OrigineDetailGuard], component: OrigineDetailComponent },
            { path: 'origines/edit/:id', canActivate: [OrigineEditGuard], component: OrigineComponent }
        ])
    ],
    declarations: [OrigineListComponent, OrigineDetailComponent, OrigineFilterPipe, OrigineComponent],
    providers: [OrigineService, OrigineDetailGuard, OrigineEditGuard]
})
export class OrigineModule { }