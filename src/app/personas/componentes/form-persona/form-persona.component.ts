import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Persona } from '../../model/persona';
import { PersonasService } from '../../services/personas.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.css']
})
export class FormPersonaComponent implements OnInit {
  persona: Persona;

  constructor( private personasServices: PersonasService, private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.activateRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.persona = new Persona();
    } else {
      this.personasServices.get(parseInt(id)).subscribe(persona => this.persona = persona);
    }
  }

  enviarPersona(persona: Persona) {
    if (!persona.id) {
      this.personasServices.create(persona).subscribe(() => this.location.back());
    } else {
      this.personasServices.update(persona).subscribe(() => this.location.back());
    }

  }

  cancelar() {
    this.location.back();
  }
}
