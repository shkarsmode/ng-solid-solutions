import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFountPageComponent } from './pages/not-fount-page/not-fount-page.component';

@NgModule({
    declarations: [
        NotFountPageComponent
    ],
    imports: [
        CommonModule, 
        NotFoundRoutingModule
    ],
})
export class NotFoundModule {}
