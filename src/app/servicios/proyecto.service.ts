import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Proyecto } from '../clases/proyecto';


@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  constructor(private http: HttpClient) { }
  crearProyecto(proyecto:Proyecto){
    return this.http.post("https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/proyectos", proyecto);
  }
  obtenerProyectos(){
    return this.http.get<Proyecto[]>("https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/proyectos");
  }
  eliminarProyecto(proyecto:Proyecto){
    return this.http.delete("https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/proyectos?nombre="+proyecto.nombre);
  }
}
