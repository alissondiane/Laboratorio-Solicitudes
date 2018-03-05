import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Solicitud } from '../../model/solicitud';
import { SolicitudesService } from '../../services/solicitudes.service';
import {Institucion} from '../../../instituciones/model/institucion';
import {InstitucionesService} from '../../../instituciones/services/instituciones.service';
import { PersonasService } from '../../../personas/services/personas.service';
import { Persona } from '../../../personas/model/persona';


@Component({
  selector: 'ap-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  solicitud: Solicitud;
  instituciones:Institucion[];
  solicitante: Persona;
  institucion:Institucion;

  constructor( private solicitudesServices: SolicitudesService,
    private institucionesServices: InstitucionesService,
    private personaServices : PersonasService,
    private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.activateRoute.snapshot.paramMap.get('id');
    const idSolicitante: string = this.activateRoute.snapshot.paramMap.get('idSolicitante');
    if (!id) {
      this.solicitud = new Solicitud();
      this.personaServices.get(parseInt(idSolicitante)).subscribe((solicitante )=> {this.solicitante = solicitante;
      console.log(this.solicitante);
      })
    } else {
      this.solicitudesServices.get(parseInt(id)).subscribe(solicitud => this.solicitud = solicitud);
    }
    this.institucionesServices.getAll().subscribe((instituciones) => {this.instituciones = instituciones;
     console.log(this.instituciones);}
    );
  }

  enviarSolicitud(solicitud: Solicitud) {
    if (!solicitud.id) {
      solicitud.estadoId = 1;
      solicitud.estadoNombre="REGISTRADO";
      solicitud.institucionId=10;
      solicitud.institucionNombre=this.solicitud.institucionNombre;
      solicitud.solicitanteId =this.solicitante.id;
      solicitud.solicitanteNombre=this.solicitante.nombre + " "+this.solicitante.apellido;

      this.solicitudesServices.create(solicitud).subscribe(() => this.location.back());
    } else {
      this.solicitudesServices.update(solicitud).subscribe(() => this.location.back());
    }
    console.log(this.instituciones);

  }
  
  cancelar() {
    this.location.back();
  }
}
