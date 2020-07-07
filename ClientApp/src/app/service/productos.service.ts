import { Injectable } from '@angular/core';
import { IProductos } from 'app/views/base/productos';
import { Observable } from 'rxjs';
import { HttpClient,HttpHandler,HttpErrorResponse  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http:HttpClient) { }
  getProductos(): Observable<IProductos[]>{
    return this.http.get<IProductos[]>('api/Productos'); 
  }
  getProducto(id: number):Observable<IProductos>{
    return this.http.get<IProductos>('api/Producto/' + id);
  }
}
