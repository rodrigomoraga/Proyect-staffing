import { Component, OnInit } from '@angular/core';
import { RegistroComponent } from 'src/app/registro/registro.component';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-user-bienvenida',
  templateUrl: './user-bienvenida.component.html',
  styleUrls: ['./user-bienvenida.component.css']
})
export class UserBienvenidaComponent implements OnInit {
  public nombre:string;
  constructor(public reg:RegistroComponent) {
    this.nombre = reg.nombre.toString();
    }

  ngOnInit(): void {
  }

}
