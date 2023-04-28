import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchangedutyComponent } from './echangeduty.component';

describe('EchangedutyComponent', () => {
  let component: EchangedutyComponent;
  let fixture: ComponentFixture<EchangedutyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchangedutyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchangedutyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
