import { Component, OnInit, Input, Output } from '@angular/core';
import { Solicitud } from '../../model/solicitud';
import { SolicitudesService } from '../../services/solicitudes.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'ap-list-item-solicitud',
  templateUrl: './list-item-solicitud.component.html',
  styleUrls: ['./list-item-solicitud.component.css']
})
export class ListItemSolicitudComponent implements OnInit {

  @Input()
  solicitud: Solicitud;

  @Input()
  editable: boolean;

  @Output()
  eliminado: EventEmitter<any> = new EventEmitter();
  @Output()
  mostrarsolicitud: EventEmitter<any> = new EventEmitter();
  @Output()
  atender: EventEmitter<any> = new EventEmitter();


  constructor(private solicitudService: SolicitudesService) { }

  ngOnInit() {
  }

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

}
