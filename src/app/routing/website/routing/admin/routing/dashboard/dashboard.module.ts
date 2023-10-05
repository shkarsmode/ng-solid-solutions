import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';

@NgModule({
    declarations: [
        DashboardPageComponent
    ],
    imports: [
        CommonModule, 
        DashboardRoutingModule
    ],
})
export class DashboardModule {}
