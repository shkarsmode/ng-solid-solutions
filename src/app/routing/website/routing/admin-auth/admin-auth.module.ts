import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
    declarations: [
        LoginPageComponent
    ],
    imports: [
        CommonModule, 
        AdminAuthRoutingModule
    ],
})
export class AdminAuthModule {}
