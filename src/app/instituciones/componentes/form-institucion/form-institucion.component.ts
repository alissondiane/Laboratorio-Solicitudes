import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Institucion } from '../../model/institucion';
import { InstitucionesService } from '../../services/instituciones.service';

@Component({
  selector: 'app-form-institucion',
  templateUrl: './form-institucion.component.html',
  styleUrls: ['./form-institucion.component.css']
})
export class FormInstitucionComponent implements OnInit {
  institucion: Institucion;

  constructor( private institucionesServices: InstitucionesService, private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.activateRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.institucion = new Institucion();
    } else {
      this.institucionesServices.get(parseInt(id)).subscribe(institucion => this.institucion = institucion);
    }
  }

  enviarInstitucion(institucion: Institucion) {
    if (!institucion.id) {
      this.institucionesServices.create(institucion).subscribe(() => this.location.back());
    } else {
      this.institucionesServices.update(institucion).subscribe(() => this.location.back());
    }

  }

  cancelar() {
    this.location.back();
  }
}
