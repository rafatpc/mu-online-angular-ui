import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@type/user.types';
import { LoginResponse, JwtToken } from '@type/auth.types';
import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private tokenSubject: BehaviorSubject<string>;
    public token: Observable<JwtToken>;

    public static AccessToken: JwtToken;

    constructor(private http: HttpClient) {
        this.retrieveSession();

        if (this.tokenSubject.value) {
            this.verifySession();
        }
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { username, password })
            .pipe(map((result: LoginResponse) => {
                this.updateCurrentUser(result.user);
                this.updateAccessToken(result.token);
                return result;
            }));
    }

    logout() {
        this.updateCurrentUser(null);
        this.updateAccessToken(null);
    }

    private updateAccessToken(token: JwtToken) {
        AuthenticationService.AccessToken = token;
        sessionStorage.setItem('access_token', token);
        this.tokenSubject.next(token);
    }

    private updateCurrentUser(user: User) {
        localStorage.setItem('current_user', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    private retrieveSession() {
        const savedUser = JSON.parse(localStorage.getItem('current_user'));
        this.currentUserSubject = new BehaviorSubject<User>(savedUser);
        this.currentUser = this.currentUserSubject.asObservable();

        const savedToken = sessionStorage.getItem('access_token');
        this.tokenSubject = new BehaviorSubject<JwtToken>(savedToken);
        this.token = this.tokenSubject.asObservable();

        AuthenticationService.AccessToken = savedToken;
    }

    private verifySession() {
        const ENDPOINT = `${environment.apiUrl}/user/verify`;

        return this.http.post<null>(ENDPOINT, {}).subscribe(() => {
            // Verification passed
        }, () => {
            this.logout();
        });
    }
}
