import { CanActivateFn } from '@angular/router';

export const adminGuestGuard: CanActivateFn = (route, state) => {
    return confirm('Are you sure you want to activate this route?');
};