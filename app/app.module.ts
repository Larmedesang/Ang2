﻿import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AlertComponent } from './_directives/index';
import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';


import { AccueilComponent } from './accueil/index';
import { ContactFormComponent } from './contact/index';
import { CvComponent } from './cv/index';

//import { OrigineComponent } from './origines/index';
import { GdeComponent } from './gde/index';
import { GddComponent } from './gdd/index';
import { GeComponent } from './ge/index';

import { OrigineModule } from './origines/origine.module';
//import { ContactComponent } from './contact/contactForm.component';
import { DepenseModule } from './depenses/depense.module';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing, 
        OrigineModule,
        DepenseModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
    AccueilComponent,
    ContactFormComponent,
    CvComponent,
    //OrigineComponent,
    GdeComponent,
    GddComponent,
    GeComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }