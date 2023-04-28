import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDutyComponent } from './edit-duty.component';

describe('EditDutyComponent', () => {
  let component: EditDutyComponent;
  let fixture: ComponentFixture<EditDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
