import { Component, OnInit } from '@angular/core';
import { Proyecto } from '../clases/proyecto';
import { ProyectoService } from '../servicios/proyecto.service';

@Component({
  selector: 'app-proyectos-menu',
  templateUrl: './proyectos-menu.component.html',
  styleUrls: ['./proyectos-menu.component.css']
})
export class ProyectosMenuComponent implements OnInit {

  constructor(private servicio:ProyectoService) { }
  public proyectos:Proyecto[];
  public habili:string[];
  ngOnInit(): void {
    this.cargarProyectos();
  }
  cargarProyectos(){
    this.servicio.obtenerProyectos().subscribe(
      data =>{       
        this.proyectos = data;
        this.habili = this.cargarHabilidades(this.proyectos);
        let nombre:string = this.proyectos[0].nombre.toString();
        console.log(nombre);
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    )
  }
  cargarHabilidades(arreglo:Proyecto[]):string[]{
    let resultado:string[];
    let auxiliar:string[] = [];
    for(let i = 0;i<arreglo.length;i++){
        auxiliar.push()
    }
    return resultado;
  }
}
