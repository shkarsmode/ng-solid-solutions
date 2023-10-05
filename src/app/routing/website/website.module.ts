import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
    imports: [
        CommonModule, 
        WebsiteRoutingModule
    ]
})
export class WebsiteModule {}
