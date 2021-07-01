import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Producto } from './Producto';

const url = 'https://60d419fc61160900173ca4c5.mockapi.io/api/s1/Productos';

@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Producto[]>{
    return this.http.get<Producto[]>(url).pipe(
        tap((productos: Producto[])=>productos.forEach(producto => producto.cantidad = 0))
    )
  }

  public put(producto :Producto, id : number): Observable<Producto[]>{
    let opciones ={
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    
    }
    return this.http.put<Producto[]>(url+'/'+id, producto, opciones);
  }

  /*public get(id : number): Observable<Producto[]>{
      return this.http.get<Producto[]>(url+'/'+id);
    }
  */

  
}
