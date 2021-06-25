import { Component, OnInit, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-listado-productos',
  templateUrl: './listado-productos.component.html',
  styleUrls: ['./listado-productos.component.css']
})
export class ListadoProductosComponent implements OnInit {

  productos: Producto [] = [];

  
  constructor(private serviceApi : ServiceApiService){}

  ngOnInit(){
    this.serviceApi.getAll().subscribe(productos => this.productos = productos);
  }

}

