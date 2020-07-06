import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(user:Usuario){
    return this.http.post("http://localhost:3000/usuarios", user);
  }
  obtenerColab(){
    return this.http.get<Usuario[]>("http://localhost:3000/usuarios?rol=colab");
  }
  eliminarColab(user:Usuario){
    return this.http.delete("http://localhost/usuarios?user="+user.user);
  }
  buscarUsuario(user:Usuario){
    return this.http.get<Usuario>("http://localhost:3000/usuarios?user="+user.user+"&password="+user.password);
  }
}
