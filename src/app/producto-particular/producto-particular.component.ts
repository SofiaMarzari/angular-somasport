import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceComprasService } from '../service-compras.service';
import { ServiceApiService } from '../service-api.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-producto-particular',
  templateUrl: './producto-particular.component.html',
  styleUrls: ['./producto-particular.component.css']
})
export class ProductoParticularComponent implements OnInit {

  productos : Producto[];
  producto : Producto;

  constructor(
    private route: ActivatedRoute,
    private servCompras : ServiceComprasService,
    private seviceApi : ServiceApiService,
  ) {}

  ngOnInit(): void {
    const idParam = Number(this.route.snapshot.paramMap.get('ID'));
    this.seviceApi.getAll().subscribe(
          p => {
            for(let i = 0; i < p.length; i++){
              if(p[i].id == idParam){
                this.producto = p[i];  
              }
            }
          }
          
    );
  }

 comprarProducto(producto : Producto) : void{
    if(producto.cantidad > 0){
        this.servCompras.agregarProducto(producto);
        console.log(this.servCompras._lista);
    }
    
  }

}
