import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DEFAULT_ROUTER_FEATURENAME, routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
    imports: [
        CommonModule, 
        WebsiteRoutingModule,
        StoreModule.forFeature(DEFAULT_ROUTER_FEATURENAME, routerReducer)
    ]
})
export class WebsiteModule {}
