import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-btn',
  templateUrl: './usuario-btn.component.html',
  styleUrls: ['./usuario-btn.component.css']
})
export class UsuarioBtnComponent implements OnInit {
  name = "Login btn";
  constructor() { }

  ngOnInit(): void {
  }

}
