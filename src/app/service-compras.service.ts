import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './Producto';

@Injectable({
  providedIn: 'root'
})
export class ServiceComprasService {

  constructor() { }

  item: Producto;
  private lista : Producto[] = [];
  private listaSubject : BehaviorSubject<Producto[]> = new BehaviorSubject(this.lista);
  public _lista: Observable<Producto[]> = this.listaSubject.asObservable();

  agregarProducto(p : Producto){
    this.item = this.lista.find((elem) => elem.descripcion == p.descripcion);
    if(!this.item){
      this.lista.push(p);
      this.listaSubject.next(this.lista);
    }else{
      this.item.cantidad += p.cantidad;
      this.listaSubject.next(this.lista);
    }
     
  }
}
