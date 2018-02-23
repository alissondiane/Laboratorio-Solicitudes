import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { Solicitud } from '../../model/solicitud';
import { SolicitudesService } from '../../services/solicitudes.service';


@Component({
  selector: 'ap-form-solicitud',
  templateUrl: './form-solicitud.component.html',
  styleUrls: ['./form-solicitud.component.css']
})
export class FormSolicitudComponent implements OnInit {

  solicitud: Solicitud;

  constructor( private solicitudesServices: SolicitudesService, private location: Location, private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id: string = this.activateRoute.snapshot.paramMap.get('id');
    if (!id) {
      this.solicitud = new Solicitud();
    } else {
      this.solicitudesServices.get(parseInt(id)).subscribe(solicitud => this.solicitud = solicitud);
    }
  }

  enviarSolicitud(solicitud: Solicitud) {
    if (!solicitud.id) {
      this.solicitudesServices.create(solicitud).subscribe(() => this.location.back());
    } else {
      this.solicitudesServices.update(solicitud).subscribe(() => this.location.back());
    }

  }

  cancelar() {
    this.location.back();
  }
}
