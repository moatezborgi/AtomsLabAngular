import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsAnalaysisComponent } from './settings-analaysis.component';

describe('SettingsAnalaysisComponent', () => {
  let component: SettingsAnalaysisComponent;
  let fixture: ComponentFixture<SettingsAnalaysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsAnalaysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsAnalaysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
