import { Component, OnInit} from '@angular/core';
import { ServiceComprasService } from '../service-compras.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  listaCarrito : Producto[];
  constructor(private servCompras : ServiceComprasService) {
  }

  ngOnInit(): void {
    this.servCompras._lista.subscribe((observable) =>this.listaCarrito = observable);
  }

}