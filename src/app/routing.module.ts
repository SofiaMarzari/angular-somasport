    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { HomeInicioComponent } from './home-inicio/home-inicio.component';
    import { NavProductosComponent } from './nav-productos/nav-productos.component';
    import { LoginSesionComponent } from './login-sesion/login-sesion.component';
    import { ProductosOfertasComponent } from './productos-ofertas/productos-ofertas.component';
    import { RedesContactoComponent } from './redes-contacto/redes-contacto.component';
    import { ProductoParticularComponent} from './producto-particular/producto-particular.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
    

    const rutas : Routes = [
        { path: '', redirectTo: 'home', pathMatch:'full' },
        { path: 'home', component: HomeInicioComponent },
        { path: 'productos', component: NavProductosComponent },
        { path: 'ofertas', component: ProductosOfertasComponent },
        { path: 'contacto', component: RedesContactoComponent },
        { path: 'login', component: LoginSesionComponent },
        { path: 'verProducto/:ID', component: ProductoParticularComponent },
        { path: 'carrito', component: CarritoComprasComponent }
    ];


    @NgModule({
        //aca definimos el router
        imports: [RouterModule.forRoot(rutas)],
        exports: [RouterModule]
    })

    export class AppRoutingModule { }

    
