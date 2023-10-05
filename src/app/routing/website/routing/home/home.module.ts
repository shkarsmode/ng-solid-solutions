import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './pages/home-page/home-page.component';

@NgModule({
    declarations: [
        HomePageComponent
    ],
    imports: [
        CommonModule,
        MatSliderModule,
        HomeRoutingModule
    ],
})
export class HomeModule {}
