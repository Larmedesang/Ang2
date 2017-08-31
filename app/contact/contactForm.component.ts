import { Component, OnInit } from '@angular/core';

import { User } from '../_models/index';
import { UserService } from '../_services/index';

import { Personne } from '../personne/personne';

@Component({
    moduleId: module.id,
    templateUrl: 'contactForm.component.html'
})

export class ContactFormComponent  {
  model = new Personne(1,'NomA','PrenomA','EmailA','CommentaireA');
}

