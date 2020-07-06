import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Usuario } from '../clases/usuario';
import { UsuarioService } from '../servicios/usuario.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  //parametros formulario
  showModal: boolean;
  registerForm: FormGroup;
  submitted = false;
  //parametros usuario
  public usuario:string;
  public clave:string;


  
  validarUsuario(){
    let user:Usuario = new Usuario();
    user.user = this.usuario;
    user.password = this.clave;

    this.servicio.buscarUsuario(user).subscribe(
      data =>{
        let variable:Usuario = data;
        if(variable.nombre == user.nombre && variable.password == user.password){
          console.log( "Inicio de sesion correcto" );
          this.router.navigateByUrl("/privado/user-proyectos");          
        }
        else{
          alert("Usuario y/o contraseña incorrecta");
        }
        
      },
      error =>{
        alert( "ERROR!" );
        console.log("Error", error);
      }
    );
      this.hide();
  }
  constructor(private formBuilder: FormBuilder,private servicio:UsuarioService,private router: Router) { }
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
