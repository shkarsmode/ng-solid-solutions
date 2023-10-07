import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { EMPTY, Observable, catchError, first, mergeMap } from 'rxjs';
import { getAdminAuthAccessToken } from '../store/admin-auth.selectors';

@Injectable()
export class AdminAuthInterceptor implements HttpInterceptor {
    constructor(
        private store$: Store
    ) {}

    intercept(
        request: HttpRequest<unknown>,
        next: HttpHandler
    ): Observable<HttpEvent<unknown>> {
        return this.store$.pipe(
            select(getAdminAuthAccessToken),
            first(),
            mergeMap(token => {
                const authRequest = token ? request.clone({
                    setHeaders: {
                        'Authorization': `Bearer ${token}`
                    }
                }) : request;
                return next.handle(authRequest).pipe(
                    catchError(error => {
                        if (error instanceof HttpErrorResponse) {
                            if (error.status === 401) {
                                console.log('redirect on login page or sign out')
                                return EMPTY;
                            }
                        }
                        
                        throw error;
                    })
                )
            })
        )
    }
}
