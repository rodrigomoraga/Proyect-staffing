import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuLateralColabComponent } from './menu-lateral-colab.component';

describe('MenuLateralColabComponent', () => {
  let component: MenuLateralColabComponent;
  let fixture: ComponentFixture<MenuLateralColabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuLateralColabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuLateralColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
