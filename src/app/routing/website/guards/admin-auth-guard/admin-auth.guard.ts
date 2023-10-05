import { CanActivateFn } from '@angular/router';

export const adminAuthGuard: CanActivateFn = (route, state) => {
    return confirm('Are you sure you want to activate this route?');
};
