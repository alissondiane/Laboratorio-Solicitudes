import { Injectable } from '@angular/core';
import { Solicitud } from '../model/solicitud';

import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SolicitudesConfig } from '../solicitudes.config';
import { ResultMessage } from '../../model/result-message';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

const httpOptions = {
  headers: new HttpHeaders({'Content-type': 'application/json'})
};

@Injectable()
export class SolicitudesService {

  private resourceUrl: string;

  constructor( private http: HttpClient ) {
    this.resourceUrl = SolicitudesConfig.httpResource.solicitudes;
  }

  getAll(): Observable<Solicitud[]> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}`, httpOptions).map(response => response['data']);
  }
  
  getSolicitudPorPersona(id: number): Observable<Solicitud[]> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}/persona/${id}`, httpOptions)
    .map(response =>response['data']
    );
  }

  get(id: number): Observable<Solicitud> {
    return this.http.get<ResultMessage>(`${this.resourceUrl}/${id}`, httpOptions)
    .map(response =>response['data']
    );
  }

  create(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.post<ResultMessage>(`${this.resourceUrl}`, solicitud, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  update(solicitud: Solicitud): Observable<Solicitud> {
    return this.http.put<ResultMessage>(`${this.resourceUrl}/${solicitud.id}`, solicitud, httpOptions)
    .map(response => {
      this.showMessage(response);
      return response['data'];
    });
  }

  delete(id: number): Observable<Solicitud> {
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
