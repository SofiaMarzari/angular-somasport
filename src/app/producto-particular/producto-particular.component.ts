import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceComprasService } from '../service-compras.service';
import { Producto } from './Producto';
/*import { Location } from '@angular/common'; */

@Component({
  selector: 'app-producto-particular',
  templateUrl: './producto-particular.component.html',
  styleUrls: ['./producto-particular.component.css']
})
export class ProductoParticularComponent implements OnInit {

  productoParticular : Producto;
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
      stock: 0,
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


  constructor(
    private route: ActivatedRoute,
    /*private location: Location */
    private servCompras : ServiceComprasService,
  ) {}

  ngOnInit(): void {
    /*this.activatedRoute.paramMap.subscribe((parametros: ParamMap) => {
      this.idParam = parametros.get("id");
    })*/
    const idParam = Number(this.route.snapshot.paramMap.get('ID'));
    this.productoParticular = this.productos[idParam-1];
  }

  comprarProducto(producto : Producto) : void{
    //invoco funcion del service 
    this.servCompras.agregarProducto(producto);
    console.log(this.servCompras._lista);
  }

}
