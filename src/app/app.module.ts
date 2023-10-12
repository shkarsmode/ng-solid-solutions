import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BASE_PATH_URL } from 'src/app/shared/tokens/environment.tokens';
import { environment } from 'src/environments/environment.development';
import { AppComponent } from './app.component';
import { WebsiteModule } from './routing/website/website.module';
import { AdminAuthStoreModule } from './store/admin-auth-store/admin-auth-store.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        WebsiteModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        AdminAuthStoreModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot([]),
        JwtModule.forRoot({
            config: {
                tokenGetter: request => request as any
            }
        })
    ],
    providers: [
        {
            provide: BASE_PATH_URL, useValue: environment.basePathUrl
        }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
