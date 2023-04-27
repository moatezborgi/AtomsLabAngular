import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtrainingComponent } from './listtraining.component';

describe('ListtrainingComponent', () => {
  let component: ListtrainingComponent;
  let fixture: ComponentFixture<ListtrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListtrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListtrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
