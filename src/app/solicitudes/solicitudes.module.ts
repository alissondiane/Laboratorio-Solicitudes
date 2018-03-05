import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { SolicitudesRoutingModule } from './solicitudes-routing.module';
import { SolicitudesService } from './services/solicitudes.service';
import { ListItemSolicitudComponent } from './components/list-item-solicitud/list-item-solicitud.component';
import { ListSolicitudesComponent } from './components/list-solicitudes/list-solicitudes.component';
import { FormSolicitudComponent } from './components/form-solicitud/form-solicitud.component';
import { InstitucionesService } from '../instituciones/services/instituciones.service';
import { InstitucionModule } from '../instituciones/instituciones.module';
import { PersonasModule } from '../personas/personas.module';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    SolicitudesRoutingModule,
    FormsModule,InstitucionModule,
    PersonasModule,
    NgSelectModule
  ],
  declarations: [ListItemSolicitudComponent, ListSolicitudesComponent, FormSolicitudComponent],
  providers: [SolicitudesService],
  exports: [ListItemSolicitudComponent, ListSolicitudesComponent, FormSolicitudComponent]
})
export class SolicitudesModule { }
