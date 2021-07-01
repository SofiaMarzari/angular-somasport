import { Component, OnInit} from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { ServiceComprasService } from '../service-compras.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrls: ['./carrito-compras.component.css']
})
export class CarritoComprasComponent implements OnInit {

  listaCarrito : Producto[];
  vacioSi : boolean;
  vacioNo : boolean;

  constructor(private servCompras : ServiceComprasService,
              private servApi : ServiceApiService) {
  }

  ngOnInit(): void {
    this.servCompras._lista.subscribe((observable) =>this.listaCarrito = observable);
    if(this.listaCarrito.length != 0){
      this.vacioSi = false;
      this.vacioNo = true;
    }else{
      this.vacioSi = true;
      this.vacioNo = false;
    }
  }

  finalizarCompra(){
   // this.servApi.putProductos(this.listaCarrito);
   this.listaCarrito.forEach(element => {
      let idProd = element.id;
      element.stock -= element.cantidad;
      delete element.cantidad;
      console.log(element);
      this.servApi.put(element, idProd).subscribe(productos => this.listaCarrito = productos);
    });
  }

}