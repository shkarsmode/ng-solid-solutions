import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { GridRoutingModule } from './grid-routing.module';
import { GridPageComponent } from './pages/grid-page/grid-page.component';


@NgModule({
  declarations: [
    GridPageComponent
  ],
  imports: [
    CommonModule,
    GridRoutingModule
  ]
})
export class GridModule { }
