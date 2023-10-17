import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminHeaderWidgetComponent } from './admin-header-widget.component';

describe('AdminHeaderWidgetComponent', () => {
  let component: AdminHeaderWidgetComponent;
  let fixture: ComponentFixture<AdminHeaderWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminHeaderWidgetComponent]
    });
    fixture = TestBed.createComponent(AdminHeaderWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
