import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-btn',
  templateUrl: './usuario-btn.component.html',
  styleUrls: ['./usuario-btn.component.css']
})
export class UsuarioBtnComponent implements OnInit {
  imgLogin = 'assets/img/login.png';
  constructor() { }

  ngOnInit(): void {
  }

}
