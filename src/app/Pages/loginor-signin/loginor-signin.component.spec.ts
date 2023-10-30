import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginorSigninComponent } from './loginor-signin.component';

describe('LoginorSigninComponent', () => {
  let component: LoginorSigninComponent;
  let fixture: ComponentFixture<LoginorSigninComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginorSigninComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginorSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
