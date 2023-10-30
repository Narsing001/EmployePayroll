import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtendanceComponent } from './atendance.component';

describe('AtendanceComponent', () => {
  let component: AtendanceComponent;
  let fixture: ComponentFixture<AtendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtendanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
