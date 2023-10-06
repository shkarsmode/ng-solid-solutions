import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLoginWidgetComponent } from './admin-login-widget.component';

describe('AdminLoginWidgetComponent', () => {
  let component: AdminLoginWidgetComponent;
  let fixture: ComponentFixture<AdminLoginWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLoginWidgetComponent]
    });
    fixture = TestBed.createComponent(AdminLoginWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
