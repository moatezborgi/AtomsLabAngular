import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetrainingComponent } from './deletetraining.component';

describe('DeletetrainingComponent', () => {
  let component: DeletetrainingComponent;
  let fixture: ComponentFixture<DeletetrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletetrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletetrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
