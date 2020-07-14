import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../clases/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  crearUsuario(user:Usuario){
    return this.http.post("https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/usuarios", user);
  }
  obtenerColab(){
    return this.http.get<Usuario[]>("https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/usuarios?rol=colab");
  }
  eliminarColab(user:Usuario){
    return this.http.delete("https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/usuarios?user="+user.user);
  }
  login(username:string, password:string){
    return this.http.get<Usuario[]>( "https://proyect-staffing-jserver-kbefbqorma-ue.a.run.app/usuarios?user="+username+"&password="+ password );
  }
}
