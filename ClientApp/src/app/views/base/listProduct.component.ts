import { Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialog2Component } from './my-dialog2.component';
import { IServicio } from './servicio';
import { ServiceService } from 'app/service.service';
import { ClienteService } from './cliente.service';
import { EstadoService } from 'app/estado.service';
import { ICliente } from './cliente';
import { EditarServicioComponent } from 'app/editar-servicio/editar-servicio.component';
import { PdfMakeWrapper, Txt, Table, Canvas, Line, Rect } from 'pdfmake-wrapper';
import html2canvas from 'html2canvas';
import { style } from '@angular/animations';
import { content } from 'html2canvas/dist/types/css/property-descriptors/content';
import { variable } from '@angular/compiler/src/output/output_ast';
import {pdfmake} from 'pdfmake';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService } from './alert.service';
import { DatePipe } from '@angular/common';



@Component({
 
  templateUrl: './listProduct.component.html',
  
})
export class listProductComponent implements OnInit
 {
   servicios: IServicio[];
  info:any= {};
  filterPost= '';
  servi;
  prueba: "prueba1ddfff";
  p: number = 1;
    constructor( private serviciosServ: ServiceService, private clienteServ:  ClienteService
      , private estadoServi : EstadoService, private router: Router,private activatedRoute: ActivatedRoute, private alertService: AlertService
      
      ) { 
        
      }
    
    ngOnInit()
    {
      
      this.getServicios();  
      this.servi = this.getServicios();
          
    }
    getServicios():void{
      this.serviciosServ.getServicio()
      .subscribe(servicioData =>this.servicios = servicioData);
    
    }
    deleteServicio(servicio: IServicio): void {
      
      this.serviciosServ.delete(servicio)
      .subscribe(data => this.cargarData(),
      error => console.error(error));
  }  
  cargarData() {
    this.serviciosServ.getServicio().subscribe(servicioDesdeWS => this.servicios = servicioDesdeWS,
        error => console.error(error));
  }
  openCrear(): void
  {
      this.router.navigate(["/base/addservice"]);
  }
 openEdit(id: number)
  {    
      this.router.navigate(["/base/editservice/" + id]);
  }
  
  public openPDF(servicio: IServicio)
  {
    let list = servicio.descripcions;
    console.log(list);
    var format= "yyyy-MM-dd";
   let subtotal = servicio.subtotal;
   let estado = servicio.estados.nombre;
   let nombre = servicio.clientes.nombre;
   let totales = servicio.total;
   let manobra = servicio.manobra;
   let tiosan = servicio.tiosan;
   var dp = new DatePipe(navigator.language);
   let date= dp.transform(servicio.date, format);
   let addrees= servicio.clientes.address;
   let telefono =servicio.clientes.telefono;
   let zipCode= servicio.clientes.zipCode;
   let idservicio= servicio.idServicio;
   let email= servicio.clientes.email;
   let nota= servicio.nota;
   var cont = 0;
   var i = 0;
   
    const pdf = new PdfMakeWrapper();  
    pdf.add(
      pdf.ln(2));
   // pdf.add(new Txt('INVOICE').alignment('right').bold().fontSize(20).end);
    pdf.info({
      title: 'AC VIDAL LLC INVOICE',
      author: 'AC VIDAL LLC',
   
  });
    pdf.add(
      pdf.ln(2));
    pdf.add(new Txt('AC VIDAL LLC').alignment('center').bold().fontSize(12).end);
    pdf.add(new Txt(' 2504 Fureen Dr Louisville, KY 40218').alignment('center').bold().fontSize(8).end);
    pdf.add(new Txt('(786)262-1834   (713)303-7145').alignment('center').bold().fontSize(8).end);
    pdf.add(new Txt('License No.: 969378061115').alignment('center').bold().fontSize(8).end);
    pdf.add(
    pdf.ln(2));
    pdf.add(new Txt([estado,' ','No: ', idservicio]).alignment('right').bold().fontSize(8).end);
    pdf.add(new Txt(['Date: ', date]).alignment('right').bold().fontSize(8).end);  
    pdf.add(new Txt(['Customer: ',nombre]).alignment('justify').bold().fontSize(8).end);   
    pdf.add(new Txt(['Address: ', addrees]).alignment('justify').bold().fontSize(8).end); 
    pdf.add(new Txt(['Zip Code: ', zipCode]).alignment('justify').bold().fontSize(8).end);     
    pdf.add(new Txt(['Telephone: ',telefono]).alignment('justify').bold().fontSize(8).end);
    pdf.add(new Txt(['Email: ',email]).alignment('justify').bold().fontSize(8).end);  
   
    
    pdf.add(
      pdf.ln(2));      
   while (cont == 0 && i < list.length) {
    pdf.add(new Table([
      ['Description'],
   ]).widths([ 500]).color('black').alignment('justify').bold().fontSize(8).end);  
 
   cont++;
   }   
   for (let index = 0; index < list.length; index++) {
     const element = list[index];
     pdf.add(new Table([
    [ element.texto]     
   ]).widths([500]).alignment('justify').fontSize(8).end); 
     
   }    
   if(list.length == 0)
   {
    pdf.add(new Txt(['Remark']).alignment('justify').bold().fontSize(8).end);
    pdf.add(new Txt([nota]).alignment('justify').bold().fontSize(8).end);
   }
   pdf.add(
    pdf.ln(1));    
    pdf.add(
      new Canvas([
          new Rect([70,0], [80,0]).end
      ]).alignment('right').end
  );
 
  pdf.add(new Txt(['Total amount: ', totales.toString()]).alignment('right').bold().fontSize(8).end);
  

    pdf.footer(new Txt('AC VIDAL LLC').alignment('center').bold().fontSize(8).end);    
      
    pdf.create().open();
    pdf.create().download('AC VIDAL LLC.pdf')


    

  
  }
 
}
