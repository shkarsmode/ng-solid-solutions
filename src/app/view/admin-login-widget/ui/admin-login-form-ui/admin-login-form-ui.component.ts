import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-admin-login-form-ui',
    templateUrl: './admin-login-form-ui.component.html',
    styleUrls: ['./admin-login-form-ui.component.scss'],
})
export class AdminLoginFormUiComponent implements OnInit {
    @Input() formError: string | null;
    @Input() isLoading: boolean | null;
    @Output() onSubmitForm: EventEmitter<{ login: string, password: string}> = new EventEmitter();
    @Output() onChangeForm: EventEmitter<void> = new EventEmitter();

    public formGroup: FormGroup;

    public ngOnInit(): void {
        this.initFormGroup();
    }

    private initFormGroup(): void {
        this.formGroup = new FormGroup({
            login: new FormControl('', Validators.required),
            password: new FormControl('', [
                Validators.required, Validators.minLength(5)
            ]),
        });
    }

    public onSubmit(): void {
        if (this.isSubmitDisabled) return;
        this.onSubmitForm.emit(this.formGroup.value);
    }

    public onChange(): void {
        if (!this.formError) return;
        this.onChangeForm.emit();
    }

    public get isSubmitDisabled(): boolean {
        return this.formGroup.invalid || !!this.formError || !!this.isLoading;
    }
}
