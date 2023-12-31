import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard, adminGuestGuard } from '@guards';



const routes: Routes = [
    { 
        path: '',
        pathMatch: 'full', 
        loadChildren: () => import('./routing/home/home.module')
            .then(m => m.HomeModule) 
    },
    { 
        path: 'admin/auth',
        canActivate: [adminGuestGuard],
        canMatch: [adminGuestGuard],
        loadChildren: () => import('./routing/admin-auth/admin-auth.module')
            .then(m => m.AdminAuthModule) 
    },
    { 
        path: 'admin',
        canActivate: [adminAuthGuard],
        canMatch: [adminAuthGuard],
        loadChildren: () => import('./routing/admin/admin.module')
            .then(m => m.AdminModule) 
    },
    { 
        path: '**', 
        loadChildren: () => import('./routing/not-found/not-found.module')
            .then(m => m.NotFoundModule) 
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class WebsiteRoutingModule {}
