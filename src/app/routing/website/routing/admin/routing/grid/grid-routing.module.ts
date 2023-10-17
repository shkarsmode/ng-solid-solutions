import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridPageComponent } from './pages/grid-page/grid-page.component';

const routes: Routes = [
    {
        path: '', component: GridPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class GridRoutingModule {}
