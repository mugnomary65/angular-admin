import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClienteService } from 'app/views/base/cliente.service';
import { HttpHandler } from '@angular/common/http';
import { ICliente } from 'app/views/base/cliente';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-modalcliente',
  templateUrl: './modalcliente.component.html',
  styleUrls: ['./modalcliente.component.css']
})
export class ModalclienteComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }
  closeModalDialog(){
    console.error('kkll');
    this.dialog.closeAll(); //set none css after close dialog
   }
  
}
