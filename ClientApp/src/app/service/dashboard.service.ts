import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from 'app/views/base/cliente';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http:HttpClient) { }
  getClienteTotal(): Observable<number>{
    return this.http.get<number>('api/Dashboard/totalClientes'); 
 
}
  getTotalServicios(): Observable<number>{
    return this.http.get<number>('api/Dashboard/totalServicios'); 
 
}

getTioSan(): Observable<number>{
  return this.http.get<number>('api/Dashboard/tioSanDashb'); 

}
}
