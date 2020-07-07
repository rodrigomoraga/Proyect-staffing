import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import de componentes
import { InicioComponent } from './inicio/inicio.component';
import { ColaboradoresComponent } from './colaboradores/colaboradores.component';
import { ProyectosMenuComponent } from './proyectos-menu/proyectos-menu.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from './modal/modal.component';
import { RegistroComponent } from './registro/registro.component';
import { UserCrearComponent } from './usuario/user-crear/user-crear.component';
import { UserProyectosComponent } from './usuario/user-proyectos/user-proyectos.component';
import { UserDesarrolladoresComponent } from './usuario/user-desarrolladores/user-desarrolladores.component';
import { UserAddColabComponent } from './usuario/user-add-colab/user-add-colab.component';
import { UserBienvenidaComponent } from './usuario/user-bienvenida/user-bienvenida.component';



@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ColaboradoresComponent,
    ProyectosMenuComponent,
    MenuLateralComponent,
    ModalComponent,
    RegistroComponent,
    UserCrearComponent,
    UserProyectosComponent,
    UserDesarrolladoresComponent,
    UserAddColabComponent,
    UserBienvenidaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
