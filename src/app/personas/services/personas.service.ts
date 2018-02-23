import { Injectable } from '@angular/core';
import { Persona } from '../model/persona';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { PersonasConfig } from '../personas.config';
import { ResultMessage } from '../../model/result-message';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class PersonasService {

  private resourceUrl: string;

  constructor( private http: HttpClient ) {
    this.resourceUrl = PersonasConfig.httpResource.solicitudes;
  }

  getAll(): Observable<Persona[]> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}`, httpOptions).map(response => response['data']);
  }

  get(id: number): Observable<Persona> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}/${id}`, httpOptions)
    .map(response =>response['data']
    );
  }

  create(solicitud: Persona): Observable<Persona> {
    return this.http.post<ResultMessage>(`${this.resourceUrl}`, solicitud, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  update(persona: Persona): Observable<Persona> {
    return this.http.put<ResultMessage>(`${this.resourceUrl}/${persona.id}`, persona, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  delete(id: number): Observable<Persona> {
    return this.http.delete<ResultMessage>(`${this.resourceUrl}/${id}`, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  private showMessage(response) {
    alert(response.message);
  }

}
