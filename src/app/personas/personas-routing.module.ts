import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasComponent } from './componentes/personas/personas.component';
//import { FormSolicitudComponent } from './componentes/form-solicitud/form-solicitud.component';

const routes: Routes = [
  { path: 'personas', component: PersonasComponent }
 // { path: 'nuevaSolicitud', component: FormSolicitudComponent},
 // { path: 'editarSolicitud/:id', component: FormSolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonasRoutingModule {


}
