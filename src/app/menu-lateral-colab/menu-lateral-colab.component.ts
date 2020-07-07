import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-menu-lateral-colab',
  templateUrl: './menu-lateral-colab.component.html',
  styleUrls: ['./menu-lateral-colab.component.css']
})
export class MenuLateralColabComponent implements OnInit {

  element2:HTMLElement;
  element3:HTMLElement;

  constructor(private render: Renderer2) { }

  ngOnInit(): void {
    this.element2 = document.getElementById('proyectos');
    this.element3 = document.getElementById('desarrolladores');
    this.render.addClass(this.element3,'active'); 
  }

  public activarItem(numero:number){
    if(numero == 2){
      this.render.addClass(this.element2,'active');
      this.render.removeClass(this.element3,'active');
    }else{
      this.render.addClass(this.element3,'active');
      this.render.removeClass(this.element2,'active');

    }
  }

}
