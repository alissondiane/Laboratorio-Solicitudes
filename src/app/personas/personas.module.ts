import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { PersonasRoutingModule } from './personas-routing.module';
import {PersonasService } from './services/personas.service';
import { PersonaDetailComponent } from './componentes/persona-detail/persona-detail.component';
import { PersonasComponent } from './componentes/personas/personas.component';
//import { FormSolicitudComponent } from './components/form-solicitud/form-solicitud.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    PersonasRoutingModule,
    FormsModule
  ],
  declarations: [PersonasComponent, PersonaDetailComponent],
  providers: [PersonasService],
  exports: [PersonasComponent, PersonaDetailComponent]
})
export class PersonasModule { }
