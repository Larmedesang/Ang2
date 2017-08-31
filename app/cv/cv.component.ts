import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    moduleId: module.id,
    templateUrl: 'cv.component.html'
})

export class CvComponent {
    appNomPrenom: string = 'Ranna BUNMA';
    appAdresseLigne1: string = 'Résidence Toto';
    appAdresseLigne2: string = '1, bd Durand';
    appAdresseLigne3: string = '75013 Paris';
    appNumTel: string = '00 00 00 00 00';
}



