import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { PersonasModule } from './personas/personas.module';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { PersonasComponent } from './personas/componentes/personas/personas.component';
import { PersonaDetailComponent } from './personas/componentes/persona-detail/persona-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SolicitudesModule,
    PersonasModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
