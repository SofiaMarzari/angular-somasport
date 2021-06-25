import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { FiltroProductosComponent } from './filtro-productos/filtro-productos.component';
import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
import { ProductosOfertasComponent } from './productos-ofertas/productos-ofertas.component';

import { LoginSesionComponent } from './login-sesion/login-sesion.component';
import { NavProductosComponent } from './nav-productos/nav-productos.component';
import { ProductoPreviewComponent } from './producto-preview/producto-preview.component';
import { ProductoParticularComponent } from './producto-particular/producto-particular.component';
import { InputCantidadProductoComponent } from './input-cantidad-producto/input-cantidad-producto.component';
import { CarritoBtnComponent } from './carrito-btn/carrito-btn.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioBtnComponent,
    CarritoComprasComponent,
    GaleriaImagenesComponent,
    GaleriaInfoComponent,
    ListLomaselegidoComponent,
    ColumPublicidadComponent,
    HomeInicioComponent,
    FiltroProductosComponent,
    ListadoProductosComponent,
    ProductosOfertasComponent,
    LoginSesionComponent,
    NavProductosComponent,
    ProductoPreviewComponent,
    ProductoParticularComponent,
    InputCantidadProductoComponent,
    CarritoBtnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
