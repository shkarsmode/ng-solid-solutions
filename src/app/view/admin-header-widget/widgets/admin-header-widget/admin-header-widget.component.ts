import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { logout } from 'src/app/store/admin-auth-store/store/admin-auth.actions';

@Component({
    selector: 'app-admin-header-widget',
    templateUrl: './admin-header-widget.component.html',
    styleUrls: ['./admin-header-widget.component.scss'],
})
export class AdminHeaderWidgetComponent {

    constructor(
        private store$: Store
    ) {}

    public logout(): void {
        this.store$.dispatch(logout())
    }
}
