import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AlertService } from '..';
import { ProductosService } from 'app/service/productos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProductos } from 'app/views/base/productos';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
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
        id: [''],
        codigo: [''],
        descripcion:[''],
        entrada:[''],
        salida: [''],
        saldo: [''],
      
     });
     }

  ngOnInit()
  {
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
              error => this.router.navigate(["/base/listclientes"]));
        }
     });
  } 
  cargarFormulario(product: IProductos)
  {
    this.miFormulario.patchValue({
    id: product.id,
    codigo: product.codigo,
    descripcion:product.descripcion,
    entrada:product.entrada,
    salida: product.salida,
    saldo: product.saldo,
  });
  }

}
