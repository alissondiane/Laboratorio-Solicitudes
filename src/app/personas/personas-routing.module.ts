import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonasComponent } from './componentes/personas/personas.component';
import { FormPersonaComponent } from './componentes/form-persona/form-persona.component';
import { ListSolicitudesComponent } from '../solicitudes/components/list-solicitudes/list-solicitudes.component';

const routes: Routes = [
 { path: 'personas', component: PersonasComponent },
 { path: 'nuevaPersona', component: FormPersonaComponent},
 { path: 'editarPersona/:id', component: FormPersonaComponent},
 { path: 'solicitudes/:id', component: ListSolicitudesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PersonasRoutingModule {


}
