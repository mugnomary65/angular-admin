import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CantclientesService {

  constructor(private http:HttpClient) { }
  getGClientesDashboard(): Observable<number[]>{
    return this.http.get<number[]>('api/Clientes/cantClientes'); 
    
  } 
}
