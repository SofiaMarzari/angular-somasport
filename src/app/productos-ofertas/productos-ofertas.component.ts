import { Component, OnInit } from '@angular/core';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos-ofertas',
  templateUrl: './productos-ofertas.component.html',
  styleUrls: ['./productos-ofertas.component.css']
})
export class ProductosOfertasComponent implements OnInit {

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
      id: 3,
      image: "assets/img/producto3.jpg",
      sexo: 'femenino',
      color: 'rojo',
      talle: 34,
      precio: 11000,
      stock: 5,
      descripcion: 'Zapatillas Nike 8B',
      oferta: true,
      cantidad: 0
    },
    {
      id: 4,
      image: "assets/img/producto4.jpg",
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
      id: 5,
      image: "assets/img/producto5.jpg",
      sexo: 'femenino',
      color: 'rojo',
      talle: 34,
      precio: 11000,
      stock: 5,
      descripcion: 'Zapatillas Nike 8B',
      oferta: true,
      cantidad: 0
    },
    {
      id: 6,
      image: "assets/img/producto6.jpg",
      sexo: 'femenino',
      color: 'rojo',
      talle: 34,
      precio: 11000,
      stock: 5,
      descripcion: 'Zapatillas Nike 8B',
      oferta: false,
      cantidad: 0
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }


}
