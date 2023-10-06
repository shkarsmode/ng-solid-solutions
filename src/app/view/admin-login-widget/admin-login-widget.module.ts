import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminLoginWidgetRoutingModule } from './admin-login-widget-routing.module';
import { AdminLoginFormUiComponent } from './ui/admin-login-form-ui/admin-login-form-ui.component';
import { AdminLoginWidgetComponent } from './widgets/admin-login-widget/admin-login-widget.component';

@NgModule({
    declarations: [
        AdminLoginFormUiComponent, 
        AdminLoginWidgetComponent
    ],
    imports: [
        CommonModule, 
        AdminLoginWidgetRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatProgressSpinnerModule,
        // MatDividerModule
        ReactiveFormsModule
    ],
    exports: [
        AdminLoginWidgetComponent
    ]
})
export class AdminLoginWidgetModule {}
