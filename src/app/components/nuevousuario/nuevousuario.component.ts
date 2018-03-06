import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Persona } from '../../personas/model/persona';
import { PersonasService } from '../../personas/services/personas.service';

@Component({
  selector: 'app-nuevousuario',
  templateUrl: './nuevousuario.component.html',
  styleUrls: ['./nuevousuario.component.css']
})
export class NuevousuarioComponent implements OnInit {
  persona: Persona;

  constructor( private personasServices: PersonasService, private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.persona = new Persona();
  }

  enviarPersona() {
      this.personasServices.create(this.persona).subscribe(() => this.location.back());
  }

  cancelar() {
    this.location.back();
  }
}
