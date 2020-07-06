import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProyectosMenuComponent } from './proyectos-menu/proyectos-menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { UserAddColabComponent } from './usuario/user-add-colab/user-add-colab.component';
import { UserCrearComponent } from './usuario/user-crear/user-crear.component';
import { UserDesarrolladoresComponent } from './usuario/user-desarrolladores/user-desarrolladores.component';
import { UserProyectosComponent } from './usuario/user-proyectos/user-proyectos.component';
import { UserBienvenidaComponent } from './usuario/user-bienvenida/user-bienvenida.component';

const routes: Routes = [
  {path:'', component:InicioComponent},
  {path:'inicio', component:InicioComponent},
  {path:'proyectos-menu', component:ProyectosMenuComponent},
  {path:'colaboradores', component:ColaboradoresComponent},
  {path:'privado', component:MenuLateralComponent,
    children:[
      //{path:'', component:UserBienvenidaComponent},
      {path:'user-bienvenida', component:UserBienvenidaComponent},
      {path:'user-add-colab', component:UserAddColabComponent},
      {path:'user-crear', component:UserCrearComponent},
      {path:'user-desarrolladores', component:UserDesarrolladoresComponent},
      {path:'user-proyectos', component:UserProyectosComponent}
      
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
