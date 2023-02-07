import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {BasicDialogComponent} from "../basic-dialog/basic-dialog.component";
import {FormControl} from "@angular/forms";
import {DialogWithDataComponent} from "../dialog-with-data/dialog-with-data.component";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  nombre = new FormControl<string>('');
  resultado: string = '';

  constructor(private dialog: MatDialog) {
  }

  openBasicDialog() {

    this.dialog.open(BasicDialogComponent,{

      maxWidth: '600px',

      position: {top: '100px'},
      disableClose: true,
      hasBackdrop: true,
      backdropClass: 'fondo'
    });
  }

  openDialogWithData() {

    const dialoref = this.dialog.open(DialogWithDataComponent,{
      data: this.nombre.value,
      disableClose: true
    });


    dialoref.afterClosed().subscribe( dataDeVuelta => {
      console.log('soy asincrono');
      this.resultado = this.nombre.value + ': ' + dataDeVuelta;

    });
    console.log('No soy asincrono');
  }
}
