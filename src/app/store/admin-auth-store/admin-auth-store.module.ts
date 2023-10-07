import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AdminAuthInterceptor } from './interceptors/admin-auth.interceptor';
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
export class AdminAuthStoreModule {}
