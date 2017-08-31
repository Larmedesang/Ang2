import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import { AccueilComponent } from './accueil/index';

//import { OrigineModule } from './origines/origine.module';
import { OrigineComponent } from './origines/index';
import { GdeComponent } from './gde/index';
import { DepenseComponent } from './depenses/index';
import { GddComponent } from './gdd/index';
import { GeComponent } from './ge/index';

import { CvComponent } from './cv/index';
import { ContactFormComponent } from './contact/index';



const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    { path: 'Accueil', component: AccueilComponent },

    { path: 'Gestion_des_entrees_origine', component: OrigineComponent },
    { path: 'Gestion_des_entrees', component: GdeComponent },
    { path: 'Gestion_des_depenses_origine', component: DepenseComponent },
    { path: 'Gestion_des_depenses', component: GddComponent },
    { path: 'Gestion_exceptionnelle', component: GeComponent },

    { path: 'Cv', component: CvComponent },
    { path: 'Contact', component: ContactFormComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);