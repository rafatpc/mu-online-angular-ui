import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private tokenSubject: BehaviorSubject<string>;
    public token: Observable<string>;

    constructor(private http: HttpClient) {
        this.retrieveSession();
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { username, password })
            .pipe(map((result: LoginResponse) => {
                localStorage.setItem('current_user', JSON.stringify(result.user));
                sessionStorage.setItem('access_token', result.token);

                this.currentUserSubject.next(result.user);
                this.tokenSubject.next(result.token);

                return result;
            }));
    }

    logout() {
        localStorage.removeItem('current_user');
        sessionStorage.clear();
    }

    get accessToken(): string {
        return this.tokenSubject.value;
    }

    private retrieveSession() {
        // TODO: Verify the token
        const savedUser = JSON.parse(localStorage.getItem('current_user'));
        this.currentUserSubject = new BehaviorSubject<User>(savedUser);
        this.currentUser = this.currentUserSubject.asObservable();

        const savedToken = sessionStorage.getItem('access_token');
        this.tokenSubject = new BehaviorSubject<string>(savedToken);
        this.token = this.tokenSubject.asObservable();
    }
}

type User = {
    memb_guid: number;
    memb___id: string;
    mail_addr: string;
    memb_name: string;
    sno__numb: string;
    bloc_code: string;
    ctl1_code: string;
    IsVip: number;
    VipExpirationTime: number;
}

type LoginResponse = {
    user: User;
    token: string
}
