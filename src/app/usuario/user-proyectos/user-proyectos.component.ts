import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';
import { Proyecto } from 'src/app/clases/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { ProyectosMenuComponent } from 'src/app/proyectos-menu/proyectos-menu.component';


@Component({
  selector: 'app-user-proyectos',
  templateUrl: './user-proyectos.component.html',
  styleUrls: ['./user-proyectos.component.css']
})
export class UserProyectosComponent implements OnInit {
  proyectosTotal:Proyecto[];
  proyectos:Proyecto[];
  
  usuario:Usuario;
  constructor(private servicio:ProyectoService) { }

  ngOnInit(): void {
    this.proyectos = [];
    this.proyectosTotal = [];
    const user = JSON.parse(localStorage.getItem("user"));
    this.cargarProyectos(user.id);
    //this.buscarProyectos(user.id);
  }
  cargarProyectos(id:number){
    this.servicio.obtenerProyectos().subscribe(
      data =>{       
        this.proyectosTotal = data;
        this.buscarProyectos(id);
        let nombre:string = this.proyectosTotal[0].nombre.toString();
        console.log(nombre);
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    )
  }
  buscarProyectos(id:number){
    
    for(let i = 0;i<this.proyectosTotal.length;i++){
      for(let x = 0; x<this.proyectosTotal[i].idColaboradores.length;x++){
        if(id == this.proyectosTotal[i].idColaboradores[x]){
          this.proyectos.push(this.proyectosTotal[i]);
          break;
        }
      }
      if(id == this.proyectosTotal[i].idAdmin){
        this.proyectos.push(this.proyectosTotal[i]);
      }
    }
  }
  
}
