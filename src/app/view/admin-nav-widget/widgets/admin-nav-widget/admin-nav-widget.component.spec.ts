import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavWidgetComponent } from './admin-nav-widget.component';

describe('AdminNavWidgetComponent', () => {
  let component: AdminNavWidgetComponent;
  let fixture: ComponentFixture<AdminNavWidgetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavWidgetComponent]
    });
    fixture = TestBed.createComponent(AdminNavWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
