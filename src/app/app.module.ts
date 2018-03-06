import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { PersonasModule } from './personas/personas.module';
import { InstitucionModule } from './instituciones/instituciones.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { NuevousuarioComponent } from './components/nuevousuario/nuevousuario.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NuevousuarioComponent
  ],
  imports: [
    BrowserModule,
    SolicitudesModule,
    PersonasModule,
    FormsModule,
    InstitucionModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
