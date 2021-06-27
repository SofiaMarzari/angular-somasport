import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos-ofertas',
  templateUrl: './productos-ofertas.component.html',
  styleUrls: ['./productos-ofertas.component.css']
})
export class ProductosOfertasComponent implements OnInit {

  productos: Producto [] = [];

  constructor(private serviceApi : ServiceApiService) { }

  ngOnInit(): void {
    this.serviceApi.getAll().subscribe(productos => this.productos = productos);
  }


}
/*{
      "id": "1",
      "image": "assets/img/producto1.jpg",
      "sexo": "Masculino",
      "color": "rojo",
      "talle": 42,
      "precio": 11000,
      "stock": 15,
      "descripcion": "Zapatillas Nike 8B",
      "oferta": false
    },
    {
      "id": "2",
      "image": "assets/img/producto2.jpg",
      "sexo": "Masculino",
      "color": "Negro",
      "talle": 3,
      "precio": 2500,
      "stock": 9,
      "descripcion": "Remera Holanda",
      "oferta": false
    },
    {
      "id": "3",
      "image": "assets/img/producto3.jpg",
      "sexo": "Femenino",
      "color": "Azul",
      "talle": 5,
      "precio": 2300,
      "stock": 16,
      "descripcion": "Musculosa Marin",
      "oferta": true
    },
    {
      "id": "4",
      "image": "assets/img/producto4.jpg",
      "sexo": "Femenino",
      "color": "Negro",
      "talle": 1,
      "precio": 8200,
      "stock": 7,
      "descripcion": "Calza Kime",
      "oferta": false
    },
    {
      "id": "5",
      "image": "assets/img/producto5.jpg",
      "sexo": "Femenino",
      "color": "Blanco",
      "talle": 3,
      "precio": 15000,
      "stock": 13,
      "descripcion": "Remera Ale",
      "oferta": true
    },
    {
      "id": "6",
      "image": "assets/img/producto6.jpg",
      "sexo": "Femenino",
      "color": "Negro",
      "talle": 39,
      "precio": 12400,
      "stock": 12,
      "descripcion": "Zapatillas P9",
      "oferta": false
    }, */