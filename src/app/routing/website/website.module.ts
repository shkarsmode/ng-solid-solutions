import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundModule } from './routing/not-found/not-found.module';
import { WebsiteRoutingModule } from './website-routing.module';

@NgModule({
    declarations: [],
    imports: [
        CommonModule, 
        WebsiteRoutingModule,
        NotFoundModule
    ],
})
export class WebsiteModule {}
