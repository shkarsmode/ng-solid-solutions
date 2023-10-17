import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminHeaderUiComponent } from './ui/admin-header-ui/admin-header-ui.component';
import { AdminHeaderWidgetComponent } from './widgets/admin-header-widget/admin-header-widget.component';

@NgModule({
    declarations: [
        AdminHeaderWidgetComponent, 
        AdminHeaderUiComponent
    ],
    imports: [
        CommonModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        AdminHeaderWidgetComponent
    ]
})
export class AdminHeaderWidgetModule {}
