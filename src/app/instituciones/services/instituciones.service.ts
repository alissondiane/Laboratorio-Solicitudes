import { Injectable } from '@angular/core';
import { Institucion } from '../model/institucion';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { InstitucionesConfig } from '../instituciones.config';
import { ResultMessage } from '../../model/result-message';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class InstitucionesService {
  private resourceUrl: string;

  constructor( private http: HttpClient ) {
    this.resourceUrl = InstitucionesConfig.httpResource.solicitudes;
  }

  getAll(): Observable<Institucion[]> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}`, httpOptions).map(response => response['data']);
  }

  get(id: number): Observable<Institucion> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}/${id}`, httpOptions)
    .map(response =>response['data']
    );
  }

  create(institucion: Institucion): Observable<Institucion> {
    return this.http.post<ResultMessage>(`${this.resourceUrl}`, institucion, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  update(institucion: Institucion): Observable<Institucion> {
    return this.http.put<ResultMessage>(`${this.resourceUrl}/${institucion.id}`, institucion, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  delete(id: number): Observable<Institucion> {
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
