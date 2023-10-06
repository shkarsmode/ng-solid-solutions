import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app.component';
import { WebsiteModule } from './routing/website/website.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        WebsiteModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule,
        StoreModule.forRoot({}, {}),
        StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
        StoreRouterConnectingModule.forRoot()
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
