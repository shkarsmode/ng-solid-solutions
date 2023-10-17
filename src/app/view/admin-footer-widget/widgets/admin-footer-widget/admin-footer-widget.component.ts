import { Component } from '@angular/core';

@Component({
    selector: 'app-admin-footer-widget',
    templateUrl: './admin-footer-widget.component.html',
    styleUrls: ['./admin-footer-widget.component.scss'],
})
export class AdminFooterWidgetComponent {
    public date: Date = new Date();
}
