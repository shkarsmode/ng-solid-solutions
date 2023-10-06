import { Component } from '@angular/core';

@Component({
    selector: 'app-admin-login-widget',
    templateUrl: './admin-login-widget.component.html',
    styleUrls: ['./admin-login-widget.component.scss'],
})
export class AdminLoginWidgetComponent {
    public serverError: string;

    public onSubmitForm(obj: { login: string, password: string }): void {
        console.log(obj.login, obj.password);
        this.serverError = '🥸 Incorrect Credentials Fusion 🥸';
    }

    public onChangeForm(): void {
        this.serverError = '';
    }
}
