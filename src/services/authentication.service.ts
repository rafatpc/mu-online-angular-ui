import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '@type/user.types';
import { LoginResponse, JwtToken } from '@type/auth.types';
import { environment } from '../environments/environment';
import { SessionService } from './session.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(
        private http: HttpClient,
        private session: SessionService
    ) {
        if (session.accessToken !== null) {
            this.verifySession();
        }
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { username, password })
            .pipe(map(this.interceptLogin.bind(this)));
    }

    logout() {
        this.session.updateCurrentUser(null);
        this.session.updateAccessToken(null);
    }

    private interceptLogin(result: LoginResponse) {
        this.session.updateCurrentUser(result.user);
        this.session.updateAccessToken(result.token);
        return result;
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
