import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GananciaService {

  constructor(private http:HttpClient) { }
  getGanancias(): Observable<number>{
    return this.http.get<number>('api/Ganancias'); 
    }

    getGananciasDashboard(): Observable<number[]>{
      return this.http.get<number[]>('api/Ganancias/gananciasDashb'); 
      
    } 
    getGastosDashboard(): Observable<number[]>{
      return this.http.get<number[]>('api/Ganancias/gastosDashb'); 
      
    } 
  

}
