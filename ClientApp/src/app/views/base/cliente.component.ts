import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators,ReactiveFormsModule } from '@angular/forms';
import { ClienteService } from './cliente.service';
import { AlertService } from '.';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from './cliente';
import { DatePipe } from '@angular/common';
import { element } from 'protractor';
import { MatDialog } from '@angular/material/dialog';

@Component({
    templateUrl: 'cliente.component.html',
  
})
export class ClienteComponent implements OnInit  {
  miFormulario: FormGroup;
  modoEdicion: boolean = false;
  clienteId: number;
  ignorarExistenCambiosPendientes: boolean = false;
 
  constructor(
    public fb: FormBuilder,private clientesService: ClienteService, private activatedRoute: ActivatedRoute,
    private alertService: AlertService,private dialog: MatDialog,  private router: Router
    ) 
     {
     this.miFormulario = this.fb.group({
      nombre: [''],
     email: [''],
     telefono:[''],
     address:[''],
     zipCode: [''],
     date: ['',Validators.required],
   });
    }
    touchedAndInvalid = (controlName: string) => this.miFormulario.get(controlName).touched && this.miFormulario.get(controlName).invalid;
    openDialog(){
      this.router.navigate(["/base/addservice"]);
    }
  
    ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      if (params["id"] == undefined) {
        return;
      }  
      else{
        this.modoEdicion = true;
        this.clienteId = (parseInt(params["id"]));
    
        this.clientesService.getClient(this.clienteId)
              .subscribe(clientes => this.cargarFormulario(clientes),
            error => this.router.navigate(["/base/listclientes"]));
      }
     
  
});

  }
  cargarFormulario(cliente: ICliente)
   {
     var dp = new DatePipe(navigator.language);
     var format= "yyyy-MM-dd";
     this.miFormulario.patchValue({
      nombre: cliente.nombre,      
       email: cliente.email,
       telefono: cliente.telefono,
       address: cliente.address,
       zipCode: cliente.zipCode,
       date: dp.transform(cliente.date, format),
             
     });
    }
  save(){
    this.ignorarExistenCambiosPendientes = true;     
     let cliente: ICliente =Object.assign({}, this.miFormulario.value) ;
    if(this.miFormulario.invalid)
    { 
      this.miFormulario.markAllAsTouched();   
      return this.alertService.error('You must fill the required fields');
    }
              
    if (this.modoEdicion) {
      // editar el registro
      
     cliente.clienteId = this.clienteId;
     
     this.clientesService.updateCliente(cliente)
      .subscribe(cliente => this.onSaveSuccess(), 
      error=> console.error(error));          
      } 
      else {
       // agregar el registro
  
      this.clientesService.createCliente(cliente)
   .subscribe(cliente => this.onSaveSuccess(), 
   error => this.alertService.error('Sorry an error occurred.'));
     
    }  
  }
  onSaveSuccess(){
    this.openDialog();
    
  }
  existenCambiosPendientes(): void {
    this.router.navigate(["/base/listclients"]);
  }
}
