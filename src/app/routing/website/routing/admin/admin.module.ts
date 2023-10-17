import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminFooterWidgetModule } from 'src/app/view/admin-footer-widget/admin-footer-widget.module';
import { AdminHeaderWidgetModule } from 'src/app/view/admin-header-widget/admin-header-widget.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
    declarations: [
        AdminPageComponent
    ],
    imports: [
        CommonModule, 
        AdminRoutingModule,
        AdminFooterWidgetModule,
        AdminHeaderWidgetModule
    ],
})
export class AdminModule {}
