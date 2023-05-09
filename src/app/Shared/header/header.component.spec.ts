import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetrieveUsersComponent } from './retrieve-users.component';

describe('RetrieveUsersComponent', () => {
  let component: RetrieveUsersComponent;
  let fixture: ComponentFixture<RetrieveUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetrieveUsersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetrieveUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
