import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-lomaselegido',
  templateUrl: './list-lomaselegido.component.html',
  styleUrls: ['./list-lomaselegido.component.css']
})
export class ListLomaselegidoComponent implements OnInit {
  name = "Lo mas elegido";
  constructor() { }

  ngOnInit(): void {
  }

}
