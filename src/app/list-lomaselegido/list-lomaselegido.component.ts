import { Component, OnInit } from '@angular/core';
import { ProductoParticularComponent } from '../producto-particular/producto-particular.component';
import { ServiceApiService } from '../service-api.service';
import { Producto } from './Producto';

@Component({
  selector: 'app-list-lomaselegido',
  templateUrl: './list-lomaselegido.component.html',
  styleUrls: ['./list-lomaselegido.component.css']
})
export class ListLomaselegidoComponent implements OnInit {

  constructor(private seviceApi : ServiceApiService) {
    
    
  }

 
  ngOnInit(): void {
  }
//console.log(p["descripcion"])
}
