import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario.service';
import { Router, RouterLink } from '@angular/router';


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
  constructor(private formBuilder: FormBuilder,
    private servicio:UsuarioService,
    private router: Router) { }

  public iniciarSesion(){
    this.servicio.login( this.usuario, this.clave ).subscribe(
      data => {
        if( data.length != 0 && data[0].rol == "admin"){        
          localStorage.setItem( "user", JSON.stringify(data[0]) );
          this.router.navigateByUrl( "/privado/admin/user-proyectos" );
        }else if(data.length != 0 && data[0].rol == "colab"){
          localStorage.setItem( "user", JSON.stringify(data[0]) );
          this.router.navigateByUrl( "/privado/colab/user-desarrolladores" );          
        }else{
          alert( "error1" );
        }
      }, 
      error => {
        alert( "Ocurrio un error" );
      }
      
    );
    this.hide();
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
