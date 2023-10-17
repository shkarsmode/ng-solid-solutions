import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFooterWidgetComponent } from './admin-footer-widget.component';

describe('AdminFooterWidgetComponent', () => {
  let component: AdminFooterWidgetComponent;
  let fixture: ComponentFixture<AdminFooterWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFooterWidgetComponent]
    });
    fixture = TestBed.createComponent(AdminFooterWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
