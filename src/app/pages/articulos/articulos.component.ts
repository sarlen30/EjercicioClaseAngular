import {Component, OnInit} from '@angular/core';
import {Articulos} from "../../models/Articulos";
import {FormBuilder, FormControl, FormControlState, FormGroup, Validators} from "@angular/forms";
import {ArticulosService} from "../../services/articulos.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.scss']
})


export class ArticulosComponent implements OnInit{

  articulosList : Articulos[] = [];
  categoriasList = ['Consolas', 'Portatiles','Smartphones'];

  formulario = this.fb.group({
    nombre: ['', Validators.required],
    categoria: [ [''], Validators.required],
    stock: [0, [Validators.required]],
    precio: [0,Validators.required],
    enVenta: [true, Validators.required],

  });
  posicion: number = 0;

  constructor( private fb: FormBuilder, private articuloService: ArticulosService, private router: Router) {
  }

  ngOnInit(): void {

  this.articulosList = this.articuloService.crearArticulos();

    if(this.articuloService.articulo != undefined){
      //TODO: METERLO EN LA LISTA EN LA MISMA POSICION EN LA QUE ESTABA
      this.articulosList[this.articuloService.posicion] = this.articuloService.articulo;

    }
  }



  addArticulo(): void {
    const articulo = new Articulos('Nuevo',['Nuevo'],0,500,false);
    this.articulosList.push(articulo);
  }

  removeArticulo(): void{
    this.articulosList.pop();
  }

  formData() {

    console.log(this.formulario.value.categoria);
    if(this.formulario.valid){
      let articulo: Articulos = new Articulos(
        this.formulario.value.nombre!,
        this.formulario.value.categoria!,
        this.formulario.value.stock!,
        this.formulario.value.precio!,
        this.formulario.value.enVenta!
      );

      this.articulosList.push(articulo);


      this.formulario.setValue({
        nombre: ' ',
        categoria: [''],
        stock: 0,
        precio: 0,
        enVenta: true
      });

    }
  }

  modificar(articulo: Articulos, i: number) {
    this.posicion = i;

    this.formulario.setValue({
      nombre: articulo.nombre,
      categoria: articulo.categorias,
      stock: articulo.stock,
      precio: articulo.precio,
      enVenta: articulo.enVenta
    });


  }

  update() {
    const articulo: Articulos = new Articulos(
      this.formulario.value.nombre!,
      this.formulario.value.categoria!,
      this.formulario.value.stock!,
      this.formulario.value.precio!,
      this.formulario.value.enVenta!
    );


    this.articulosList[this.posicion] = articulo;
  }

  irAdetalle(articulo: Articulos, i: number) {

    this.articuloService.articulo = articulo;
    this.articuloService.posicion = i;
    this.router.navigate(['detail'])
  }
}
