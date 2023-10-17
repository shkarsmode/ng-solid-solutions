import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminFooterUiComponent } from './admin-footer-ui.component';

describe('AdminFooterUiComponent', () => {
  let component: AdminFooterUiComponent;
  let fixture: ComponentFixture<AdminFooterUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminFooterUiComponent]
    });
    fixture = TestBed.createComponent(AdminFooterUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
