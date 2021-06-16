import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceComprasService {

  constructor() { }

  private lista : Producto[] = [];
  _lista : BehaviorSubject<Producto[]> = new BehaviorSubject(this.lista);

  agregarProducto(p : Producto){
    this.lista.push(p);
    this._lista.next(this.lista);
    console.log(this.lista);
  }
}
