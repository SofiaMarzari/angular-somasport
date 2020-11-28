import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  imgCarrito = 'assets/img/carrito.png';
  constructor() { }

  ngOnInit(): void {
  }

}
