import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';


import { Persona } from '../../model/persona';
import { PersonasService } from '../../services/personas.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  personas: Persona[];
  mensaje: string;

  subscription: Subscription;

  constructor(private personaService: PersonasService, private location: Location) { }

  ngOnInit() {
    this.actualiarPersonas();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  actualiarPersonas() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.personaService.getAll().subscribe(personas => this.personas = personas);
  }
}
