import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminLoginWidgetModule } from 'src/app/view/admin-login-widget/admin-login-widget.module';
import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        CommonModule, 
        AdminAuthRoutingModule,
        AdminLoginWidgetModule,
        // AdminAuthStoreModule
    ],
})
export class AdminAuthModule {}
