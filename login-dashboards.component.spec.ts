import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDashboardsComponent } from './login-dashboards.component';

describe('LoginDashboardsComponent', () => {
  let component: LoginDashboardsComponent;
  let fixture: ComponentFixture<LoginDashboardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDashboardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDashboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
