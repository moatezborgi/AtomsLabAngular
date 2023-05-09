import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListReactifComponent } from './list-reactif.component';

describe('ListReactifComponent', () => {
  let component: ListReactifComponent;
  let fixture: ComponentFixture<ListReactifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListReactifComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListReactifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
