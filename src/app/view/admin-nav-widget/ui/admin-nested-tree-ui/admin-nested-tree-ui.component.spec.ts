import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNestedTreeUiComponent } from './admin-nested-tree-ui.component';

describe('AdminNestedTreeUiComponent', () => {
  let component: AdminNestedTreeUiComponent;
  let fixture: ComponentFixture<AdminNestedTreeUiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNestedTreeUiComponent]
    });
    fixture = TestBed.createComponent(AdminNestedTreeUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
