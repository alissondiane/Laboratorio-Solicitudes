import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import {InstitucionRoutingModule } from './instituciones-routing.module';
import {InstitucionesService } from './services/instituciones.service';

import { InstitucionDetailComponent } from './componentes/institucion-detail/institucion-detail.component';
import { InstitucionesComponent } from './componentes/instituciones/instituciones.component';
import { FormInstitucionComponent } from './componentes/form-institucion/form-institucion.component';
import { SolicitudesModule} from '../solicitudes/solicitudes.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    InstitucionRoutingModule,
    FormsModule,
    
  ],
  declarations: [InstitucionesComponent, InstitucionDetailComponent,
     FormInstitucionComponent],
  providers: [InstitucionesService],
  exports: [InstitucionesComponent, InstitucionDetailComponent,
    FormInstitucionComponent]
})
export class InstitucionModule { }
