import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { WebsiteModule } from './routing/website/website.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        WebsiteModule,
        RouterModule.forRoot([]),
        BrowserAnimationsModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
