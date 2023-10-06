import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AdminAuthEffects } from './store/admin-auth.effects';
import { ADMIN_AUTH_FEATURENAME, adminAuthReducer } from './store/admin-auth.reducer';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        HttpClientModule,
        StoreModule.forFeature(
            ADMIN_AUTH_FEATURENAME, 
            adminAuthReducer
        ),
        EffectsModule.forFeature([AdminAuthEffects])
    ]
})
export class AdminAuthStoreModule {}
