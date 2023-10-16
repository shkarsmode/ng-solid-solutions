import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Observable, first, map } from 'rxjs';
import { AdminAuthService } from 'src/app/store/admin-auth-store/services/admin-auth.service';

export const adminGuestGuard: CanActivateFn = (route, state) => {
    return getIsGuest();
};

function getIsGuest(): Observable<boolean> {
    const router = inject(Router);
    return inject(AdminAuthService).isGuest$.pipe(
        first(),
        map(isGuest => {
            if (!isGuest) {
                router.navigateByUrl('/admin');
            }

            return isGuest;
        })
    )
}