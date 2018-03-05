import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


import { Solicitud } from '../../model/solicitud';
import { SolicitudesService } from '../../services/solicitudes.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ap-list-solicitudes',
  templateUrl: './list-solicitudes.component.html',
  styleUrls: ['./list-solicitudes.component.css']
})
export class ListSolicitudesComponent implements OnInit, OnDestroy {

  solicitudes: Solicitud[];
  solicitudesfiltradas: Solicitud[];
  idSolicitante:number ;
  mensaje: string;

  subscription: Subscription;

  @Input()
  editable: boolean;
  

  constructor(private solicitudService: SolicitudesService, private location: Location,private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    const id : string =  this.activateRoute.snapshot.paramMap.get('id');
    this.idSolicitante = parseInt(id);
    console.log(this.idSolicitante);
    this.actualiarSolicitudes();
    if(this.idSolicitante){
      this.editable=true;
    }else{
      this.editable=false;
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    console.log("destruido");
  }

  actualiarSolicitudes() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

    if (!this.idSolicitante) {
      this.subscription = this.solicitudService.getAll().subscribe((solicitudes )=>{ this.solicitudes = solicitudes;
      console.log(solicitudes);
      })
      
    } else {
      this.subscription = this.solicitudService.getSolicitudPorPersona(this.idSolicitante).subscribe((solicitudes) =>{ this.solicitudes = solicitudes;
        console.log(solicitudes); 
        //this.actualizar();                             
      });
    }
   
    
  }
  
  MostrarSolicitud(solicitud : Solicitud){
    this.mensaje = `Solicitud : ${ solicitud.id }
    Institucion : ${solicitud.institucionNombre}
    Solicitante: ${solicitud.solicitanteNombre}`;
    alert(this.mensaje);
  }
  
  actualizar(){
    let id = this.idSolicitante;
    this.solicitudesfiltradas = this.solicitudes.filter((solicitud:Solicitud) => solicitud.solicitanteId === id);
    /*
    let id = this.idSolicitante;
    let greaterTen = [];

    for (let i = 0; i<this.solicitudes.length; i++) {
      var currentNumber = this.solicitudes[i];
      if (currentNumber.solicitanteId === id) {
       greaterTen.push(currentNumber)
      }
    }
    this.solicitudesfiltradas = greaterTen;*/
    console.log(this.solicitudesfiltradas);
    console.log(this.idSolicitante);
  }
}
