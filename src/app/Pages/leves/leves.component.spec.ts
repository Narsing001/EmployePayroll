import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevesComponent } from './leves.component';

describe('LevesComponent', () => {
  let component: LevesComponent;
  let fixture: ComponentFixture<LevesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
