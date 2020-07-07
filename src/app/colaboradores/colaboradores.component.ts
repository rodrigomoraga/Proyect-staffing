import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsuarioService } from '../servicios/usuario.service';


@Component({
  selector: 'app-colaboradores',
  templateUrl: './colaboradores.component.html',
  styleUrls: ['./colaboradores.component.css']
})
export class ColaboradoresComponent implements OnInit {
  
  constructor(private servicio:UsuarioService) { }
  public colaboradores:Usuario[];
  public habili:string[];
  ngOnInit(): void {
    this.cargarColaboradores();
    //this.habili = this.cargarHabilidades();    
  }
 
  cargarColaboradores(){
    this.servicio.obtenerColab().subscribe(
      data =>{       
        this.colaboradores = data;
        this.habili = this.cargarHabilidades(this.colaboradores);
        let nombre:string = this.colaboradores[0].nombre.toString();
        console.log(nombre);
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
      }
    )
  }
  cargarHabilidades(arreglo:Usuario[]):string[]{
    let resultado:string[];
    let auxiliar:string[] = [];
    for(let i = 0;i<arreglo.length;i++){
        auxiliar.push()
    }
    return resultado;
  }
}
