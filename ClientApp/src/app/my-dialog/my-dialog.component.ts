import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'app/views/base/cliente.service';
import { HttpHandler } from '@angular/common/http';
import { ICliente } from 'app/views/base/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css'],
  providers: [ClienteService],
})
export class MyDialogComponent {
  miFormulario: FormGroup;
  display='none';
  personas: ICliente[];
 

  modoEdicion:boolean = false;
  submitted = false;
  constructor(public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,private dialog: MatDialog, private clienteService: ClienteService, private router: Router) {
    this.miFormulario = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', Validators.email],
      telefono:['', Validators.required],
      address:['', Validators.required],
      zipCode: ['', Validators.nullValidator],
      date: ['', Validators.required],
   }
   );
  }
  touchedAndInvalid = (controlName: string) => this.miFormulario.get(controlName).touched && this.miFormulario.get(controlName).invalid;
 
  save() {
  let cliente: ICliente = Object.assign({}, this.miFormulario.value) ;
  console.table(cliente);

    this.clienteService.createCliente(cliente)
    .subscribe(cliente => this.onSaveSuccess(), 
    error=> console.error(error));
    
  }
  onSaveSuccess(){
    this.dialog.closeAll();
    this.router.navigate(["/base/listclientes"]);
 
    
  }
  onSubmit() {
    console.error('kkll');
        this.save();   
       
        
  }  
  closeModalDialog(){
    console.error('kkll');
    this.dialog.closeAll(); //set none css after close dialog
   }
  

  }



