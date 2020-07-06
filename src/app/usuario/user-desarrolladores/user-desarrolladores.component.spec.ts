import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDesarrolladoresComponent } from './user-desarrolladores.component';

describe('UserDesarrolladoresComponent', () => {
  let component: UserDesarrolladoresComponent;
  let fixture: ComponentFixture<UserDesarrolladoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDesarrolladoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDesarrolladoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
