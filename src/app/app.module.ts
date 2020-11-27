import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioBtnComponent } from './usuario-btn/usuario-btn.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioBtnComponent,
    CarritoComprasComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
