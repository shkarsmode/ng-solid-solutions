import { Component, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-admin-header-ui',
    templateUrl: './admin-header-ui.component.html',
    styleUrls: ['./admin-header-ui.component.scss'],
})
export class AdminHeaderUiComponent {
    @Output() logout: EventEmitter<void> = new EventEmitter();

    public onLogoutButtonClick(): void {
        this.logout.emit();
    }
}
