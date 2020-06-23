import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { ICliente } from 'app/views/base/cliente';
import { ClienteService } from 'app/views/base/cliente.service';
import { IEstado } from '../../my-dialog2/estado';
import { EstadoService } from 'app/estado.service';
import { IServicio } from 'app/views/base/servicio';
import { ServiceService } from 'app/service.service';

import { Router, ActivatedRoute } from '@angular/router';
import { ProviderAst } from '@angular/compiler';
import { JsonPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { DescriptionService } from 'app/description.service';
import { IDescription } from 'app/views/base/description';
import { AlertService } from './alert.service';
@Component({
  
  templateUrl: './my-dialog2.component.html',
  providers:[ServiceService],
})
export class MyDialog2Component implements OnInit {
  clientes;
  estados;
  id;
  servicios: IServicio[];
  miFormulario1: FormGroup;
  descripcionABorrar: number[] = [];
  descripcionlist:IDescription[]=[];
  servicioId: number;
  Idservicio: number;
  modoEdicion: boolean = false;
  ignorarExistenCambiosPendientes: boolean = false;
  servicio: IServicio;
  control: FormArray;
  control1: FormArray;
  cantidad: number;
  precio: number;
  preciototal;
  cantidades: [];
  precios: [];
  editField: string;
  seisporciento: number;
  seisporcientoTotal: number;
  subtotal: number;
  tiosan: number;
  total: number;
  gastosNetos: number;
    ganancias: number;
  
  
  constructor(
    public fb1: FormBuilder, 
    private clientesService: ClienteService,
    private estadosService: EstadoService,
    private serviceServic: ServiceService,    
    private router: Router,
    private descripcionService: DescriptionService,
    private activatedRoute: ActivatedRoute,
    private alertService: AlertService,
    
  //  @Inject(MAT_DIALOG_DATA) public data: any
  )
     { 
      this.miFormulario1 = this.fb1.group({
        idServicio:['', Validators.required],
        descripcions: this.fb1.array([]),   
       total:['', Validators.required],
        date:['', Validators.required],
        nota:['', Validators.required],
        clienteId:['', Validators.required],
        estadoId:['', Validators.required],
        manobra: ['', Validators.required],
        seisporciento: [''],
        subtotal: [''],
        tiosan:[''],
        gastosNetos: [''],
        ganancias: [''],

      });
        
     }
    
  touchedAndInvalid = (controlName: string) => this.miFormulario1.get(controlName).touched && this.miFormulario1.get(controlName).invalid;
  ngOnInit()
  {
    this.clientes = this.clientesService.getClientes();
   this.estados = this.estadosService.getEstado();  
   this.activatedRoute.params.subscribe(params => {
    if (params["id"] == undefined) {
      return;
    }   
      this.modoEdicion = true;
      this.servicioId = (parseInt(params["id"]));
  
      this.serviceServic.getServi(this.servicioId.toString())
            .subscribe(servicios => this.cargarFormulario(servicios),
          error => this.router.navigate(["/base/listProduct"]));
     
    this.preciototal = (parseInt("0")); 
    
    
 
  });
   }
   onTextboxInput(event)
   {
     this.cantidad = event.target.value;    
            
   }
   onTextboxInput1(event)
   {
     this.precio = event.target.value;    

          
   }
   updateTotal(){
  let descripcion = this.miFormulario1.controls['descripcions'] as FormArray;


   }
  


   cargarFormulario(servicio: IServicio)
   {
     var dp = new DatePipe(navigator.language);
     var format= "yyyy-MM-dd";
     this.miFormulario1.patchValue({
       id: servicio.id,
       idServicio: servicio.idServicio,      
       total: servicio.total,
       date: dp.transform(servicio.date, format),
       nota: servicio.nota,
       clienteId: servicio.clientes.clienteId,
       estadoId: servicio.estados.estadoId,
       clientes: servicio.clientes,
       estados: servicio.estados,
       manobra: servicio.manobra,
      seisporciento: servicio.seisporciento,       
      subtotal: servicio.subtotal,
      tiosan: servicio.tiosan,
        
     });
    
     let descripcions = this.miFormulario1.controls['descripcions'] as FormArray;
     servicio.descripcions.forEach(direccion => {
       let direccionFG = this.construirDescripcion();
       direccionFG.patchValue(direccion);
       descripcions.push(direccionFG);
     });
   }

   existenCambiosPendientes(): void {
    this.router.navigate(["/base/listProduct"]);
  }

 save() {
  this.ignorarExistenCambiosPendientes = true;  
  /*if(this.touchedAndInvalid)
  {
    return this.alertService.warn('Lo sentimos, ha ocurrido un error.');
  }*/
 
   let servicio: IServicio =Object.assign({}, this.miFormulario1.value) ;
    
   console.log(servicio.seisporciento);
       
  if (this.modoEdicion) {
    // editar el registro
    
   servicio.id = this.servicioId;
   
   this.serviceServic.updateServicio(servicio)
     .subscribe(servicio => this.borrarServicio(),
       error => this.alertService.error('Lo sentimos, ha ocurrido un error.'));
          
    } else {

   // agregar el registro

    this.serviceServic.createServicio(servicio)
 .subscribe(servicio => this.onSaveSuccess(), 
 error => this.alertService.error('Lo sentimos, ha ocurrido un error.'));
 
  }  
    
  }
  onSaveSuccess(){
      this.router.navigate(["/base/listProduct"]);
      
   
  
    
  }
  
  closeModalDialog(){
    console.error('kkll');
  
   }
   agregarDescripcion() {
     const descripcions = this.fb1.group({
      id:[0],
      cantidad:['', Validators.required],
      texto:['', Validators.required],
      precio: ['', Validators.required],
      total: ['', Validators.required],
      servicioId: this.servicioId != null ? this.servicioId : 0,
     })

     this.descriptionForm.push(descripcions);
     
  
  }

  construirDescripcion() {
    return this.fb1.group({
      id: new FormControl(),
      cantidad:new FormControl(),
      texto: new FormControl(),
      precio: new FormControl(),
      total: new FormControl(),
      servicioId: new FormControl(),
    });
 
  }
  removerDescripcion(index: number) {
    let descripcions = this.miFormulario1.get('descripcions') as FormArray;
    let descripcionRemover = descripcions.at(index) as FormGroup;
    if (descripcionRemover.controls['id'].value != '0') {
      this.descripcionABorrar.push(<number>descripcionRemover.controls['id'].value);
    }
    descripcions.removeAt(index);
 
  }
  borrarServicio() {
    if (this.descripcionABorrar.length === 0) {
       this.onSaveSuccess();
      return;
    }
    this.descripcionService.deleteDescription(this.descripcionABorrar)
      .subscribe(() => this.onSaveSuccess(),
        error => console.error(error));
  }
  get getFormControls() {
    const control = this.miFormulario1.get('descripcions') as FormArray;
    return control;
  }
  get descriptionForm()
  {
    return this.miFormulario1.get('descripcions') as FormArray;
  }
  changeValue(index: number){
    var arrayControl = this.miFormulario1.get('descripcions') as FormArray;
    var item = arrayControl.at(index);
    console.log("item",item);
    var variable = item.value;
    variable.total = variable.cantidad * variable.precio;
    console.log("total",variable.total);
    this.preciototal = variable.total;
   
    
   
  }
  //Calculo del precio total por celda
  precioTotal(id: number): number {
    var arrayControl = this.miFormulario1.get('descripcions') as FormArray;
    var item = arrayControl.at(id);
    console.log("item",item);
    var variable = item.value;
    variable.total = variable.cantidad * variable.precio;
    console.log("total",variable.total); 
  return this.preciototal = variable.total;
   

  }
  //Calculo del 6%  
  seisPorCiento()
  {
    let seis = 0;
    var arrayControl = this.miFormulario1.get('descripcions') as FormArray;
    let servicio: IServicio =Object.assign({}, this.miFormulario1.value) ;
      for (let index = 0; index < arrayControl.length; index++) {
      var variable = arrayControl.at(index).value;      
      if(index == 0){
        this.seisporciento = variable.total;   
      }
      else{
        this.seisporciento = variable.total + this.seisporciento;
      }
      
    }
    seis = this.seisporciento * 0.06;
    this.seisporcientoTotal = seis;
    this.miFormulario1.controls['seisporciento'].setValue(seis);
    //return servicio.seisporciento = seis;
    console.log('dhhd');
   
     
  }

    //Calculo de la suma de todos m'as el 6%
  subTotal()
  {
    let sub = 0;
    sub = this.seisporciento + this.seisporcientoTotal;
    this.subtotal = sub;
    //para setear cualquier valor en el formulario solo se debe ejecutar la siguiente linea de codigo
    this.miFormulario1.controls['subtotal'].setValue(sub); 
    console.log("subtotal:",this.subtotal);
  }
   //Calculo del 30% de la mano de obra
  tioSan()
  {
    let tio = 0;
    let servicio: IServicio =Object.assign({}, this.miFormulario1.value) ;
    let workforce= servicio.manobra;
    tio = workforce * 0.30;
    this.miFormulario1.controls['tiosan'].setValue(tio);
    console.log('assas');
  }
  //Calculo del subtotal - el 30%
  totalComplto()
  {
    let totales = 0;
    let servicio: IServicio =Object.assign({}, this.miFormulario1.value) ;
    let workforce= servicio.manobra;
     totales = this.subtotal + workforce;
     servicio.total = this.total;     
     this.miFormulario1.controls['total'].setValue(totales);
     console.log(servicio.total);
  }
  gananciasTotal()
  {
    let tio = 0;
    let totalganancia = 0;
    let servicio: IServicio =Object.assign({}, this.miFormulario1.value) ;
    let workforce= servicio.manobra;
    tio = workforce * 0.30;
    totalganancia = workforce - tio; 
    this.miFormulario1.controls['ganancias'].setValue(totalganancia);
    console.log('assas');
  }
  totalNeto()
  {
    let sub = 0;
    sub = this.seisporciento;
    this.subtotal = sub;
    //para setear cualquier valor en el formulario solo se debe ejecutar la siguiente linea de codigo
    this.miFormulario1.controls['gastosNetos'].setValue(sub); 
    console.log("gastosNetos:",this.subtotal);
  }

 

}
