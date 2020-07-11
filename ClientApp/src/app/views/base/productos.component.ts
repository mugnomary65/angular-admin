import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '.';
import { ProductosService } from 'app/service/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductos } from 'app/views/base/productos';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
 
})
export class ProductosComponent implements OnInit {
  miFormulario: FormGroup;
  modoEdicion: boolean = false;
  productoId: number;
  productos: IProductos[];
  filterPost= '';
  ignorarExistenCambiosPendientes: boolean = false;


  constructor(public fb: FormBuilder,private productosService: ProductosService, private activatedRoute: ActivatedRoute,
    private alertService: AlertService,  private router: Router) {
     
      this.miFormulario = this.fb.group({
        codigo:[''],
        descripcion:[''],
        entrada:[''],
        salida: [''],
        saldo: [''],
      
     });
     }

  ngOnInit()
  {
    this.getProducto();
    this.activatedRoute.params.subscribe(params =>
      {
        if (params["id"] == undefined) 
      {
          return;
        }  
        else
      {
          this.modoEdicion = true;
          this.productoId = (parseInt(params["id"]));
      
          this.productosService.getProducto(this.productoId)
                .subscribe(productos => this.cargarFormulario(productos),
              error => this.router.navigate(["/base/inventary"]));
        }
     });
  } 
  cargarFormulario(product: IProductos)
  {
    this.miFormulario.patchValue({  
    codigo: product.codigo,
    descripcion: product.descripcion,
    entrada: product.entrada,
    salida: product.salida,
    saldo: product.saldo,
  });
  }
  save()
  {
    let producto: IProductos =Object.assign({}, this.miFormulario.value) ;
    this.productosService.createProducto(producto)
    .subscribe( producto => this.onSaveSuccess(),
    error => this.alertService.error('Sorry an error occurred.'));
  }
  onSaveSuccess(){
    this.getProducto();
}
getProducto():void{
  this.productosService.getProductos()
  .subscribe(productData =>this.productos = productData);
}
deleteProducto(producto: IProductos)
{
  this.productosService.delete(producto)
  .subscribe(data => this.cargarData(),
  error => console.error(error));
  
}
cargarData() {
  this.productosService.getProductos().subscribe(productoDesdeWS => this.productos = productoDesdeWS,
      error => console.error(error));
}

}
