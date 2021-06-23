import { Component, OnInit} from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceComprasService } from '../service-compras.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {
  //listaCarrito: Producto[] = [];
  listaCarrito$ : Observable<Producto[]>;
  constructor(private servCompras : ServiceComprasService) {
    //servCompras._lista.subscribe((observable) =>this.listaCarrito = observable);
    this.listaCarrito$ = servCompras._lista.asObservable();
  }

  ngOnInit(): void {
  }

}
