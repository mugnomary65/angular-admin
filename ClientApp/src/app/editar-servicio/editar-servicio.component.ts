import { Component, OnInit, Inject, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ICliente } from 'app/views/base/cliente';
import { ClienteService } from 'app/views/base/cliente.service';
import { IEstado } from 'app/my-dialog2/estado';
import { EstadoService } from 'app/estado.service';
import { IServicio } from 'app/views/base/servicio';
import { ServiceService } from 'app/service.service';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { ProviderAst } from '@angular/compiler';
import { JsonPipe, DatePipe } from '@angular/common';
import { Observable } from 'rxjs';
import { IconsModule } from 'app/views/icons/icons.module';


@Component({
  selector: 'app-editar-servicio',
  templateUrl: './editar-servicio.component.html',
  styleUrls: ['./editar-servicio.component.css']
})
export class EditarServicioComponent implements OnInit {
  editable;
  clientes;
   estados; 
   servicio: IServicio;   
  miFormulario1: FormGroup;
  servicios;
  nombre;
  idserv;
  user: IServicio;
  estado;
  client;
  est;
  
  constructor(public fb1: FormBuilder,
     private clientesService: ClienteService,
    private estadosService: EstadoService,
    private serviceServic: ServiceService,
    private dialog: MatDialog,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    @Inject(MAT_DIALOG_DATA) public data: any) 
     {
    this.miFormulario1 = this.fb1.group({
      id:[],
      idServicio:['', Validators.required],
     descripcions:['', Validators.required],
     precio:['', Validators.required],
     impuesto:['', Validators.required],  
     total:['', Validators.required],  
      date:['', Validators.required],
      nota:['', Validators.required],
      clienteId:['', Validators.required],
      estadoId:['', Validators.required],
      clientes:[],
      estados:[],
      
     
   }
 
   );
   console.log('data passed in is:', this.data);
   this.servicio= this.data;
    this.idserv = this.servicio.id;
    this.nombre = this.servicio.clientes.clienteId;
    this.estado = this.servicio.estados.estadoId;
    this.client= this.servicio.clientes;
    this.est = this.servicio.estados;
    console.log(this.estado);
  }
  touchedAndInvalid = (controlName: string) => this.miFormulario1.get(controlName).touched && this.miFormulario1.get(controlName).invalid;
  ngOnInit()
  {
    this.clientes = this.clientesService.getClientes();
   this.estados = this.estadosService.getEstado();
    this.serviceServic.getServi(this.idserv)
    .subscribe(servicio => this.cargarFormulario(servicio),    
    error => this.router.navigate(["/base/listProduct"])); 
    
     
  }
  cargarFormulario(servicio: IServicio)
  {
    var dp = new DatePipe(navigator.language);
    var format= "yyyy-MM-dd";
    this.miFormulario1.patchValue({
      id: servicio.id,
      idServicio: servicio.idServicio,
      descripcion: servicio.descripcions,    
      total: servicio.total,
      date: dp.transform(servicio.date, format),
      nota: servicio.nota,
      clienteId: servicio.clientes.clienteId,
      estadoId: servicio.estados.estadoId,
      clientes: servicio.clientes,
      estados: servicio.estados,
       
    });
   
    const user: IServicio = this.miFormulario1.value;
  }
 save() {
 let servi: IServicio = Object.assign({}, this.miFormulario1.value) ;
   servi.id = this.idserv; 
   servi.clienteId = this.nombre;
   servi.estadoId = this.estado;
   servi.estados = this.est;
   servi.clientes = this.client;
    this.serviceServic.updateServicio(servi)
    .subscribe(servicio => this.onSaveSuccess(), 
    error=> console.error(error));

  }
  onSaveSuccess(){
    this.dialog.closeAll();
    this.router.navigate(["/base/listProduct"]);
    this.serviceServic.getServicio();
    
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

