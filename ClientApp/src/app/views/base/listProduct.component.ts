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
      
      ) { }
    
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
      this.router.navigate(["/base/crearservicio"]);
  }
 openEdit(id: number)
  {    
      this.router.navigate(["/base/crearservicio/" + id]);
  }
  
  public openPDF(servicio: IServicio)
  {
    let list = servicio.descripcions;
    console.log(list);
   let data = document.getElementById("exportthis");
   let subtotal = document.getElementById("subtotal");
   let nombre = document.getElementById("nombre");
   let totales = document.getElementById("totales");
   let manobra = document.getElementById("manobra");
   let tiosan = document.getElementById("tiosan");
   let date= document.getElementById("date");
   let addrees= document.getElementById("addrees");
   let telefono =document.getElementById("telefono");
   let zipCode= document.getElementById("zipCode");
   let idservicio= document.getElementById("idservicio");
   let email= document.getElementById("email");
   var cont = 0;
   var i = 0;
    console.log(data);
    const pdf = new PdfMakeWrapper();  
    pdf.add(
      pdf.ln(2));
    pdf.add(new Txt('INVOICE').alignment('right').bold().fontSize(20).end);
    pdf.info({
      title: 'AC VIDAL LLC INVOICE',
      author: 'AC VIDAL LLC',
   
  });
    pdf.add(
      pdf.ln(2));
    pdf.add(new Txt('INVOICE').alignment('center').bold().fontSize(12).end);
    pdf.add(new Txt('(713)303-7145   (786)262-1834').alignment('center').bold().fontSize(8).end);
    pdf.add(
    pdf.ln(2));
    pdf.add(new Txt(['Invoice No: ', idservicio.textContent]).alignment('right').bold().fontSize(8).end);
    pdf.add(new Txt(['Date: ', date.textContent]).alignment('right').bold().fontSize(8).end);  
    pdf.add(new Txt(['Customer: ',nombre.textContent]).alignment('justify').bold().fontSize(8).end);   
    pdf.add(new Txt(['Address: ', addrees.textContent]).alignment('justify').bold().fontSize(8).end); 
    pdf.add(new Txt(['Zip Code: ', zipCode.textContent]).alignment('justify').bold().fontSize(8).end);     
    pdf.add(new Txt(['Telephone: ',telefono.textContent]).alignment('justify').bold().fontSize(8).end);
    pdf.add(new Txt(['Email: ',email.textContent]).alignment('justify').bold().fontSize(8).end);  
   
    
    pdf.add(
      pdf.ln(2));
      pdf.add(new Txt('Description').alignment('center').bold().fontSize(10).end);
   while (cont == 0 && i < list.length) {
    pdf.add(new Table([
      ['Cant', 'Products', 'Price', 'Total'],
   ]).widths([20, 300,50,50]).color('black').alignment('justify').bold().fontSize(8).end);  
 
   cont++;
   }   
   for (let index = 0; index < list.length; index++) {
     const element = list[index];
     pdf.add(new Table([
    [ element.cantidad,element.texto,element.precio,element.total]     
   ]).widths([20, 300, 50, 50]).alignment('justify').fontSize(8).end); 
     
   }    
   pdf.add(
    pdf.ln(1));    
    pdf.add(
      new Canvas([
          new Rect([70,0], [80,0]).end
      ]).alignment('right').end
  );
  pdf.add(new Txt(['Subtotal: ',subtotal.textContent]).alignment('right').bold().fontSize(8).end);
  pdf.add(new Txt(['Work force: ',manobra.textContent]).alignment('right').bold().fontSize(8).end);
  pdf.add(new Txt(['Tax: ',tiosan.textContent]).alignment('right').bold().fontSize(8).end);
  pdf.add(new Txt(['Total: ',totales.textContent]).alignment('right').bold().fontSize(8).end);
  

    pdf.footer(new Txt('AC VIDAL LLC').alignment('center').bold().fontSize(8).end);    
      
    pdf.create().open();
    pdf.create().download('AC VIDAL LLC.pdf')

  
  }
 
}
