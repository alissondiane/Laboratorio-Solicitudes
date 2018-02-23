import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListSolicitudesComponent } from './components/list-solicitudes/list-solicitudes.component';
import { FormSolicitudComponent } from './components/form-solicitud/form-solicitud.component';

const routes: Routes = [
  { path: 'solicitudes', component: ListSolicitudesComponent },
  { path: 'nuevaSolicitud', component: FormSolicitudComponent},
  { path: 'editarSolicitud/:id', component: FormSolicitudComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SolicitudesRoutingModule {


}
