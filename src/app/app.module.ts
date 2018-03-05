import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { PersonasModule } from './personas/personas.module';
import { InstitucionModule } from './instituciones/instituciones.module';

import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SolicitudesModule,
    PersonasModule,
    InstitucionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
