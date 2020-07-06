import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBienvenidaComponent } from './user-bienvenida.component';

describe('UserBienvenidaComponent', () => {
  let component: UserBienvenidaComponent;
  let fixture: ComponentFixture<UserBienvenidaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserBienvenidaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserBienvenidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
