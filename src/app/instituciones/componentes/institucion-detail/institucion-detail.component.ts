import { Component, OnInit, Input, Output } from '@angular/core';
import { Institucion } from '../../model/institucion';
import { InstitucionesService } from '../../services/instituciones.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-institucion-detail',
  templateUrl: './institucion-detail.component.html',
  styleUrls: ['./institucion-detail.component.css']
})
export class InstitucionDetailComponent implements OnInit {
  
  @Input()
  institucion : Institucion;

  @Output()
  eliminado: EventEmitter<any> = new EventEmitter();
  
  constructor(private institucionesService: InstitucionesService) { }

  ngOnInit() {
  }
 
  eliminarInstitucion() {
    if (confirm(`Desea eliminar la institucion ${this.institucion.id}?`)) {
      this.institucionesService.delete(this.institucion.id).subscribe(() => this.eliminado.emit(this.institucion.id));
    }
  }
  
}
