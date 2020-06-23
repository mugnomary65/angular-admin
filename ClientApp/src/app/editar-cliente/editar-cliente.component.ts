import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ClienteService } from 'app/views/base/cliente.service';
import { ICliente } from 'app/views/base/cliente';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  miFormulario: FormGroup;
  clienteId;
  cliente: ICliente;

  constructor(public fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private dialog: MatDialog,
    private clienteService: ClienteService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.miFormulario = this.fb.group({
        nombre: ['', Validators.required],
        email: ['', Validators.email],
        telefono:['', Validators.required],
        address:['', Validators.required],
        zipCode: ['', Validators.nullValidator],
        date: ['', Validators.required],
     }
     
     );
      console.log('data passed in is:', this.data);
     }
    touchedAndInvalid = (controlName: string) => this.miFormulario.get(controlName).touched && this.miFormulario.get(controlName).invalid;
    ngOnInit(): void {
                         
   this.clienteService.getClient(this.data)
             .subscribe(cliente => this.cargarFormulario(cliente),
        error => this.router.navigate(["/base/listclientes"]));
      
  }  
 cargarFormulario(cliente: ICliente)
  {
    var dp = new DatePipe(navigator.language);
    var format= "yyyy-MM-dd";
    this.miFormulario.patchValue({
      clienteId: cliente.clienteId,
      nombre: cliente.nombre,
      email: cliente.email,
      telefono:cliente.telefono,
      address: cliente.address,
      zipCode: cliente.zipCode,
      date: dp.transform(cliente.date, format)
    });
  }
  

  save() {
    let cliente: ICliente = Object.assign({}, this.miFormulario.value) ;
    console.table(cliente);
     cliente.clienteId = this.data;
      this.clienteService.updateCliente(cliente)
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
