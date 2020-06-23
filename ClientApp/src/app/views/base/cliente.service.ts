import { Injectable, Inject } from '@angular/core';
import { HttpClient,HttpHandler,HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICliente } from './cliente';
import {  throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ClienteService {

    constructor(private http:HttpClient) {   
      }
      filter:'';
      getClientes(): Observable<ICliente[]>{
        return this.http.get<ICliente[]>('api/Clientes'); 
      }
     createCliente(cliente: ICliente): Observable<ICliente> {
        return this.http.post<ICliente>('api/Clientes', cliente);
     }
       getClient(id: number):Observable<ICliente>{
          return this.http.get<ICliente>('api/Clientes/' + id);
        }
        delete(clienteId: number){
          return this.http.delete<ICliente>('api/Clientes/' + clienteId)
          .pipe(
            catchError(this.errorHandler)
          )
        }   
        errorHandler(error) {
          let errorMessage = '';
          if(error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
          } else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
          }
          console.log(errorMessage);
          return throwError(errorMessage);
       }
       updateCliente(cliente: ICliente): Observable<ICliente> {  
        console.log(cliente);
         return this.http.put<ICliente>('api/Clientes/' + cliente.clienteId.toString(), cliente);  
      }
    
    }



