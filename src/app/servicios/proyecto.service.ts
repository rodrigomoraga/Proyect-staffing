import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../clases/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }
  crearProyecto(proyecto:Proyecto){
    return this.http.post("http://localhost:3000/proyectos", proyecto);
  }
  obtenerProyectos(){
    return this.http.get<Proyecto[]>("http://localhost:3000/proyectos");
  }
  eliminarProyecto(proyecto:Proyecto){
    return this.http.delete("http://localhost:3000/proyectos?nombre="+proyecto.nombre);
  }
}
