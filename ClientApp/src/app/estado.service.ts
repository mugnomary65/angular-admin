import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEstado } from './my-dialog2/estado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor(private http:HttpClient) { }
  getEstado(): Observable<IEstado[]>{
    return this.http.get<IEstado[]>('api/Estados'); 
  }
}
