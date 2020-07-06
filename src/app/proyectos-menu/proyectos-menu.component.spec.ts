import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectosMenuComponent } from './proyectos-menu.component';

describe('ProyectosMenuComponent', () => {
  let component: ProyectosMenuComponent;
  let fixture: ComponentFixture<ProyectosMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectosMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectosMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
