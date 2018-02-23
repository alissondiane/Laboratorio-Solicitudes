import { Component, OnInit, Input, Output } from '@angular/core';
import { Persona } from '../../model/persona';
import { PersonasService } from '../../services/personas.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  @Input()
  persona : Persona;
/*
  @Output()
  eliminado: EventEmitter<any> = new EventEmitter();
  @Output()
  mostrarsolicitud: EventEmitter<any> = new EventEmitter();
  @Output()
  atender: EventEmitter<any> = new EventEmitter();
*/

  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }
 /*
  eliminarSolicitud() {
    if (confirm(`Desea eliminar la solicitud ${this.solicitud.id}?`)) {
      this.solicitudService.delete(this.solicitud.id).subscribe(() => this.eliminado.emit(this.solicitud.id));
    }
  }

  mostrar(){
      this.mostrarsolicitud.emit(this.solicitud);
  }
  atendersolicitud() {
    if (confirm(`Desea atender la solicitud ${this.solicitud.id}?`)) {
      this.solicitud.estadoNombre = "ATENDIDO";
      this.solicitudService.update(this.solicitud).subscribe(() => this.atender.emit(this.solicitud.id));
    }
  }

*/
}
