import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTreeModule } from '@angular/material/tree';
import { RouterModule } from '@angular/router';
import { AdminNestedTreeUiComponent } from './ui/admin-nested-tree-ui/admin-nested-tree-ui.component';
import { AdminNavWidgetComponent } from './widgets/admin-nav-widget/admin-nav-widget.component';

@NgModule({
    declarations: [
        AdminNavWidgetComponent, 
        AdminNestedTreeUiComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        MatTreeModule,
        MatIconModule,
        MatButtonModule
    ],
    exports: [
        AdminNavWidgetComponent
    ]
})
export class AdminNavWidgetModule {}
