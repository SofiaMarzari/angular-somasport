    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { HomeInicioComponent } from './home-inicio/home-inicio.component';
    import { ListadoProductosComponent } from './listado-productos/listado-productos.component';
    import { LoginSesionComponent } from './login-sesion/login-sesion.component';
    import { ProductosOfertasComponent } from './productos-ofertas/productos-ofertas.component';
    import { RedesContactoComponent } from './redes-contacto/redes-contacto.component';
    

    const rutas : Routes = [
        { path: '', redirectTo: 'home', pathMatch:'full' },
        { path: 'home', component: HomeInicioComponent },
        { path: 'productos', component: ListadoProductosComponent },
        { path: 'ofertas', component: ProductosOfertasComponent },
        { path: 'contacto', component: RedesContactoComponent },
        { path: 'login', component: LoginSesionComponent }
    ];


    @NgModule({
        //aca definimos el router
        imports: [RouterModule.forRoot(rutas)],
        exports: [RouterModule]
    })

    export class AppRoutingModule { }
