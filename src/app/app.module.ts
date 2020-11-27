import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioBtnComponent } from './usuario-btn/usuario-btn.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioBtnComponent,
    CarritoComprasComponent,
    GaleriaImagenesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
