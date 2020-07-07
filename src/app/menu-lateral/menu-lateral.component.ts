import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {

  @ViewChild('navlink') seleccion: ElementRef;
  element1:HTMLElement;
  element2:HTMLElement;
  element3:HTMLElement;
  
  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.element1 = document.getElementById('crear');
    this.element2 = document.getElementById('proyectos');
    this.element3 = document.getElementById('desarrolladores');
    this.render.addClass(this.element2,'active'); 
  }
  public activarItem(numero:number){
    if(numero == 1){
      this.render.addClass(this.element1,'active');
      this.render.removeClass(this.element2,'active');
      this.render.removeClass(this.element3,'active');
    }else if(numero ==2){
      this.render.addClass(this.element2,'active');
      this.render.removeClass(this.element1,'active');
      this.render.removeClass(this.element3,'active');
    }else{
      this.render.addClass(this.element3,'active');
      this.render.removeClass(this.element2,'active');
      this.render.removeClass(this.element1,'active');
    }
  }



}