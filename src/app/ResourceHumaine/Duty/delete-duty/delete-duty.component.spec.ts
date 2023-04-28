import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDutyComponent } from './delete-duty.component';

describe('DeleteDutyComponent', () => {
  let component: DeleteDutyComponent;
  let fixture: ComponentFixture<DeleteDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
