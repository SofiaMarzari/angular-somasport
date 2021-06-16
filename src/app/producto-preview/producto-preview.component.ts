import{ Component, Input, OnInit } from '@angular/core';
import { Producto } from '../listado-productos/Producto';


@Component({
  selector: 'app-producto-preview',
  templateUrl: './producto-preview.component.html',
  styleUrls: ['./producto-preview.component.css']
})
export class ProductoPreviewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() producto : Producto;

}
