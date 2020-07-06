import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/clases/proyecto';
import { ProyectoService } from 'src/app/servicios/proyecto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-crear',
  templateUrl: './user-crear.component.html',
  styleUrls: ['./user-crear.component.css']
})
export class UserCrearComponent implements OnInit {
  habilidad_juntas:string;
  nombre:string;
  fechaInicio:string;
  fechaTermino:string;
  habilidades:string[] = [];
  idColaboradores: number[] = [2,3];
  idAdmin: number;
  activo: boolean=true;
  descripcion: string;
  constructor(private servicio:ProyectoService,private router: Router) { }

  ngOnInit(): void {
  }
  capturarHabilidades():string[]{
    for(var i:number = 0; i<this.habilidad_juntas.split(",").length; i++){
      this.habilidades.push(this.habilidad_juntas.split(",")[i]);
    }

    return this.habilidades;
  }
  crearProyecto(){
    let proyect:Proyecto = new Proyecto();
    proyect.nombre = this.nombre;
    proyect.habilidades = this.capturarHabilidades();
    proyect.activo = this.activo;
    proyect.descripcion = this.descripcion;
    proyect.fechaInicio = this.fechaInicio;
    proyect.fechaTermino = this.fechaTermino;
    proyect.idAdmin = this.idAdmin;
    proyect.idColaboradores = this.idColaboradores;

    this.servicio.crearProyecto(proyect).subscribe(
      data =>{
        alert( "Proyecto agregado!" );
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    );
  }
}
