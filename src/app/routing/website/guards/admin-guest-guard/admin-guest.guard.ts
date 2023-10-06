import { CanActivateFn } from '@angular/router';

export const adminGuestGuard: CanActivateFn = (route, state) => {
    return true;
};