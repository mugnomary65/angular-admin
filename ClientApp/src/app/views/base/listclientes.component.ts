import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from 'app/my-dialog/my-dialog.component';
import { ICliente } from './cliente';
import { ClienteService } from 'app/views/base/cliente.service';

import { DatePipe } from '@angular/common';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EditarClienteComponent } from 'app/editar-cliente/editar-cliente.component';
import { Router, ActivatedRoute } from '@angular/router';
import { IconsModule } from '../icons/icons.module';
@Component({
 
  templateUrl: './listclientes.component.html',
  providers: [ClienteService],
})
export class listclientesComponent implements OnInit
 {
  [x: string]: any;
  filterPost: string = '';
  clientes: ICliente[];
  clienteId: number;
  p: number = 1;
  
  constructor( private dialog: MatDialog, private clientesService: ClienteService ,
    private activatedRoute: ActivatedRoute,
    private router: Router ) { }
  openDialog(){
    this.router.navigate(["/base/crearcliente"]);
  }
  ngOnInit()
  {
   this.getClientes();
   

  }
  openEdit(id: number)
  {    
      this.router.navigate(["/base/crearcliente/" + id]);
  }

  getClientes():void{
    this.clientesService.getClientes()
    .subscribe(clientesData =>this.clientes = clientesData);
  }
  deleteCliente(cliente: ICliente): void {
      this.clientesService.delete(cliente.clienteId)  
      .subscribe(data => {  
        this.clientes = this.clientes.filter(u => u !== cliente);  
      })
  }
  totalClientes() {
    const total = 0;
    console.log('total', this.clientes.length);

  }

}


