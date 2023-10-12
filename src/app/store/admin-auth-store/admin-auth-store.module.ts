import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { Store, StoreModule } from '@ngrx/store';
import { AdminAuthInterceptor } from './interceptors/admin-auth.interceptor';
import { initAdminAuth } from './store/admin-auth.actions';
import { AdminAuthEffects } from './store/admin-auth.effects';
import { ADMIN_AUTH_FEATURENAME, adminAuthReducer } from './store/admin-auth.reducer';

@NgModule({
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(
            ADMIN_AUTH_FEATURENAME, 
            adminAuthReducer
        ),
        EffectsModule.forFeature([AdminAuthEffects])
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AdminAuthInterceptor,
            multi: true
        }
    ]
})
export class AdminAuthStoreModule {
    constructor(private store$: Store) {
        this.store$.dispatch(initAdminAuth());
    }
}
