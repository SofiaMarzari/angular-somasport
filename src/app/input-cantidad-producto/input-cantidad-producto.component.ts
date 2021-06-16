import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
//import { Producto } from '../productos-ofertas/Producto';


@Component({
  selector: 'app-input-cantidad-producto',
  templateUrl: './input-cantidad-producto.component.html',
  styleUrls: ['./input-cantidad-producto.component.css']
})
export class InputCantidadProductoComponent implements OnInit {

  @Input() cantidad : number;
  @Input() maximo : number;
  @Output() cantidadChange: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  aumentarCantidad() : void{
    if(this.cantidad < this.maximo){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  disminuirCantidad() : void {
    if(this.cantidad > 0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
  }

  dataInput(data) : void{
    if(data <= this.maximo){
      this.cantidad = data;
      this.cantidadChange.emit(this.cantidad);
    }else{
      this.cantidad = 0;
      this.cantidadChange.emit(this.cantidad);
      alert("Lo escrito en el campo excede el stock!");
    }
  }

}
