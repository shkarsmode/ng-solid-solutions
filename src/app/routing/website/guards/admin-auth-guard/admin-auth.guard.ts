import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, first, map } from 'rxjs';
import { AdminAuthService } from 'src/app/store/admin-auth-store/services/admin-auth.service';

export const adminAuthGuard: CanActivateFn = (route, state) => {
    return getIsAuth();
};

function getIsAuth(): Observable<boolean> {
    const router = inject(Router);
    return inject(AdminAuthService).isAuth$.pipe(
        first(),
        map(isAuth => {
            if (!isAuth) {
                router.navigateByUrl('/admin/auth/login');
            }

            return isAuth;
        })
    )
}