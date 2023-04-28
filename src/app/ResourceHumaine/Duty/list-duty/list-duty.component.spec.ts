import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDutyComponent } from './list-duty.component';

describe('ListDutyComponent', () => {
  let component: ListDutyComponent;
  let fixture: ComponentFixture<ListDutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
