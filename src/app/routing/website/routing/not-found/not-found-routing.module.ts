import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFountPageComponent } from './pages/not-fount-page/not-fount-page.component';

const routes: Routes = [
    {
        path: '**',
        component: NotFountPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class NotFoundRoutingModule {}
