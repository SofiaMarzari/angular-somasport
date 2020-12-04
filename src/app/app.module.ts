import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioBtnComponent } from './usuario-btn/usuario-btn.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { GaleriaImagenesComponent } from './galeria-imagenes/galeria-imagenes.component';
import { GaleriaInfoComponent } from './galeria-info/galeria-info.component';
import { ListLomaselegidoComponent } from './list-lomaselegido/list-lomaselegido.component';
import { ColumPublicidadComponent } from './colum-publicidad/colum-publicidad.component';
import { HomeInicioComponent } from './home-inicio/home-inicio.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './routing.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioBtnComponent,
    CarritoComprasComponent,
    GaleriaImagenesComponent,
    GaleriaInfoComponent,
    ListLomaselegidoComponent,
    ColumPublicidadComponent,
    HomeInicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
