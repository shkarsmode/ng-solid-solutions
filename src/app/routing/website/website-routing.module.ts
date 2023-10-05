import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { adminAuthGuard } from './guards/admin-auth-guard/admin-auth.guard';
import { adminGuestGuard } from './guards/admin-guest-guard/admin-guest.guard';

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
        loadChildren: () => import('./routing/admin-auth/admin-auth.module')
            .then(m => m.AdminAuthModule) 
    },
    { 
        path: 'admin',
        canActivate: [adminAuthGuard],
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
