import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanificationdutyComponent } from './planificationduty.component';

describe('PlanificationdutyComponent', () => {
  let component: PlanificationdutyComponent;
  let fixture: ComponentFixture<PlanificationdutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanificationdutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanificationdutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
