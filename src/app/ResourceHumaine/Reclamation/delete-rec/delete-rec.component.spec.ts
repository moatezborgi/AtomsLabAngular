import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRecComponent } from './delete-rec.component';

describe('DeleteRecComponent', () => {
  let component: DeleteRecComponent;
  let fixture: ComponentFixture<DeleteRecComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRecComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
