import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserCrearComponent } from './user-crear.component';

describe('UserCrearComponent', () => {
  let component: UserCrearComponent;
  let fixture: ComponentFixture<UserCrearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserCrearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
