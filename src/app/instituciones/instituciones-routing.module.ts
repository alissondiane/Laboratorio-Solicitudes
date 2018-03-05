import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstitucionesComponent } from './componentes/instituciones/instituciones.component';
import { FormInstitucionComponent } from './componentes/form-institucion/form-institucion.component';


const routes: Routes = [
 { path: 'institucion', component: InstitucionesComponent },
 { path: 'nuevaInstitucion', component: FormInstitucionComponent},
 { path: 'editarInstitucion/:id', component: FormInstitucionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class InstitucionRoutingModule {


}