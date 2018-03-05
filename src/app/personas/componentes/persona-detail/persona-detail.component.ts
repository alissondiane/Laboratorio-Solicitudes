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

  @Output()
  eliminado: EventEmitter<any> = new EventEmitter();
  
  constructor(private personasService: PersonasService) { }

  ngOnInit() {
  }
 
  eliminarPersona() {
    if (confirm(`Desea eliminar la persona ${this.persona.id}?`)) {
      this.personasService.delete(this.persona.id).subscribe(() => this.eliminado.emit(this.persona.id));
    }
  }
  verSolicitudes(){
    
  }

}
