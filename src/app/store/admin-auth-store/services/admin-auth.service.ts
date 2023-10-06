import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AdminAuthService {
    constructor(
        private http: HttpClient,
        // ! inject basePathUrl
    ) {}

    public login(body: { login: string, password: string }): Observable<{ accessToken: string }> {
        return this.http.post<{ accessToken: string }>(
            'http://localhost:3000/auth/login', // ! change it on basePathUrl
            body
        );
    }
}
