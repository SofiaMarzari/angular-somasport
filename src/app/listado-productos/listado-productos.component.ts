import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {
  productos: Producto [] = [
    {
      id: 1,
      image: "assets/img/producto1.jpg",
      sexo: 'femenino',
      color: 'rojo',
      talle: 34,
      precio: 11000,
      stock: 5,
      descripcion: 'Zapatillas Nike 8B',
      oferta: false,
      cantidad: 0
    },
    {
      id: 2,
      image: "assets/img/producto2.jpg",
      sexo: 'masculino',
      color: 'negro',
      talle: 3,
      precio: 2300,
      stock: 7,
      descripcion: 'Remera Tokio',
      oferta: false,
      cantidad: 0
    },
    {
      id: 3,
      image: "assets/img/producto3.jpg",
      sexo: 'femenino',
      color: 'azul',
      talle: 5,
      precio: 4000,
      stock: 2,
      descripcion: 'Musculosa Marin',
      oferta: true,
      cantidad: 0
    },
    {
      id: 4,
      image: "assets/img/producto4.jpg",
      sexo: 'femenino',
      color: 'negro',
      talle: 5,
      precio: 7000,
      stock: 10,
      descripcion: 'Calza Holanda',
      oferta: false,
      cantidad: 0
    },
    {
      id: 5,
      image: "assets/img/producto5.jpg",
      sexo: 'femenino',
      color: 'rojo',
      talle: 1,
      precio: 3700,
      stock: 8,
      descripcion: 'Remera Luz',
      oferta: true,
      cantidad: 0
    },
    {
      id: 6,
      image: "assets/img/producto6.jpg",
      sexo: 'femenino',
      color: 'negra',
      talle: 40,
      precio: 13000,
      stock: 2,
      descripcion: 'Zapatillas Kime',
      oferta: false,
      cantidad: 0
    },
  ]

  
  constructor(){}

  ngOnInit(){}
}
