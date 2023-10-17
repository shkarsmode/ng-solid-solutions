import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [ 
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
    },
    {
        path: 'dashboard',
        component: AdminPageComponent,
        loadChildren: () => import('./routing/dashboard/dashboard.module')
            .then(m => m.DashboardModule)
    },
    {
        path: 'grid/:namespace/:entity',
        component: AdminPageComponent,
        loadChildren: () => import('./routing/grid/grid.module')
            .then(m => m.GridModule)
    },
    {
        path: 'form/:namespace/:entity',
        component: AdminPageComponent,
        loadChildren: () => import('./routing/form/form.module')
            .then(m => m.FormModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}
