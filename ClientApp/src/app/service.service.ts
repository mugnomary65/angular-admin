import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IServicio } from './views/base/servicio';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getServicio(): Observable<IServicio[]>{  
    return this.http.get<IServicio[]>('api/Servicios'); 
  }
  createServicio(servicio: IServicio): Observable<IServicio> {
    return this.http.post<IServicio>('api/Servicios', servicio);
 }
 delete(servicio: IServicio): Observable<IServicio> {
  return this.http.delete<IServicio>('api/Servicios/' + servicio.id);
  
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
updateServicio(servicio: IServicio):Observable<IServicio> {  
  console.log(servicio);
   return this.http.put<IServicio>('api/Servicios/' + servicio.id.toString(), servicio);
}
getServi(id: string):Observable<IServicio>{
  let params = new HttpParams().set('incluirDescripcion', "true")
  return this.http.get<IServicio>('api/Servicios/' + id, {params:params});
}

}
