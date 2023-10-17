import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AdminFooterUiComponent } from './ui/admin-footer-ui/admin-footer-ui.component';
import { AdminFooterWidgetComponent } from './widgets/admin-footer-widget/admin-footer-widget.component';

@NgModule({
    declarations: [
        AdminFooterUiComponent, 
        AdminFooterWidgetComponent
    ],
    imports: [CommonModule],
    exports: [AdminFooterWidgetComponent]
})
export class AdminFooterWidgetModule {}
