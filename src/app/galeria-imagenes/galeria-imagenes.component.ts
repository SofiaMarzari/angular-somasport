import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria-imagenes',
  templateUrl: './galeria-imagenes.component.html',
  styleUrls: ['./galeria-imagenes.component.css']
})
export class GaleriaImagenesComponent implements OnInit {
  img1 = 'assets/img/galeria1.jpg';
  img2 = 'assets/img/galeria2.jpg';
  constructor() { }

  ngOnInit() {
  }

}