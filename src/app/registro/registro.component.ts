import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from '../clases/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';
  

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
     private servicio:UsuarioService,
     private router: Router) { }
  //parametros para modal registrarse
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;

  //datos usuario nuevo
  habilidad_juntas: string;
  rol: string = "colab"
  user: string;
  password: string;
  public nombre: string;
  habilidades: string[] = [];
  activo: boolean = true;
  estado: boolean = false;

  crearUsuario(){
    let user:Usuario = new Usuario();
    user.nombre = this.nombre;
    user.user = this.user;
    user.password = this.password;
    user.habilidades = this.capturarHabilidades();
    user.estado = this.estado;
    user.activo = this.activo;
    user.rol = this.rol;
    
    this.servicio.crearUsuario(user).subscribe(
      data =>{
        alert( "Usuario agregado!" );
        this.hide();
        //this.router.navigateByUrl( "/privado/colab/user-desarrolladores");       
      },
      error =>{
        alert( "Ocurrio un error" );
        console.log("Error", error);
        
      }
    );
  }
  capturarHabilidades():string[]{
    for(var i:number = 0; i<this.habilidad_juntas.split(",").length; i++){
      this.habilidades.push(this.habilidad_juntas.split(",")[i]);
    }

    return this.habilidades;
  }

  show()
  {
    this.showModal = true; // Show-Hide Modal Check
    
  }
  //Bootstrap Modal Close event
  hide()
  {
    this.showModal = false;
  }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
    });
}
// convenience getter for easy access to form fields
get f() { return this.registerForm.controls; }
onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    if(this.submitted)
    {
      this.showModal = false;
    }
   
  }

}
