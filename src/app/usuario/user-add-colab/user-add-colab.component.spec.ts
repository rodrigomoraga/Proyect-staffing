import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAddColabComponent } from './user-add-colab.component';

describe('UserAddColabComponent', () => {
  let component: UserAddColabComponent;
  let fixture: ComponentFixture<UserAddColabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAddColabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddColabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
