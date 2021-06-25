import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-productos-ofertas',
  templateUrl: './productos-ofertas.component.html',
  styleUrls: ['./productos-ofertas.component.css']
})
export class ProductosOfertasComponent implements OnInit {

  productos: Producto [] = [];
  constructor(private serviceApi : ServiceApiService) { }

  ngOnInit(): void {
    this.serviceApi.getAll().subscribe(productos => this.productos = productos);
  }


}
