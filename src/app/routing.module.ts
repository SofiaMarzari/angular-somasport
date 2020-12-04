    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    import { HomeInicioComponent } from './home-inicio/home-inicio.component';
    

    const rutas : Routes = [
        { path: '', redirectTo: 'home', pathMatch:'full' },
        { path: 'home', component: HomeInicioComponent}
       
    ];


    @NgModule({
        //aca definimos el router
        imports: [RouterModule.forRoot(rutas)],
        exports: [RouterModule]
    })

    export class AppRoutingModule { }
