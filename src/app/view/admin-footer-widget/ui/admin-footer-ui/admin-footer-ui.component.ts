import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-admin-footer-ui',
    templateUrl: './admin-footer-ui.component.html',
    styleUrls: ['./admin-footer-ui.component.scss'],
})
export class AdminFooterUiComponent {
    @Input() date: Date;
}
