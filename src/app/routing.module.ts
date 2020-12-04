    import { NgModule } from '@angular/core';
    import { Routes, RouterModule } from '@angular/router';
    

    const rutas : Routes = [

    ];


    @NgModule({
        //aca definimos el router
        imports: [RouterModule.forRoot(rutas)],
        exports: [RouterModule]
    })

    export class AppRoutingModule { }
