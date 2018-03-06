import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';


import { Institucion } from '../../model/institucion';
import { InstitucionesService } from '../../services/instituciones.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-instituciones',
  templateUrl: './instituciones.component.html',
  styleUrls: ['./instituciones.component.css']
})
export class InstitucionesComponent implements OnInit {
  instituciones: Institucion[];
  mensaje: string;

  subscription: Subscription;

  constructor(private institucionService: InstitucionesService, private location: Location) { }

  ngOnInit() {
    this.actualiarInstituciones();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  actualiarInstituciones() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = this.institucionService.getAll().subscribe(instituciones => this.instituciones = instituciones);
  }

}
