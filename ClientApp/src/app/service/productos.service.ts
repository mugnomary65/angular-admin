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
    return this.http.get<IProductos>('api/Productos/' + id);
  }
  createProducto(producto: IProductos): Observable<IProductos> {
    return this.http.post<IProductos>('api/Productos', producto);
 }
 delete(producto: IProductos): Observable<IProductos> {
  return this.http.delete<IProductos>('api/Productos/' + producto.id);
  
} 

updateProducto(producto: IProductos):Observable<IProductos> {  
    return this.http.put<IProductos>('api/Productos/' + producto.id.toString(), producto);
}

}
