import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteReactifComponent } from './delete-reactif.component';

describe('DeleteReactifComponent', () => {
  let component: DeleteReactifComponent;
  let fixture: ComponentFixture<DeleteReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
