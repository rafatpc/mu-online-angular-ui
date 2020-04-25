import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '@type/user.types';
import { JwtToken } from '@type/auth.types';

@Injectable({ providedIn: 'root' })
export class SessionService {
    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    private tokenSubject: BehaviorSubject<string>;
    public token: Observable<JwtToken>;

    constructor() {
        this.retrieveSession();
    }

    updateAccessToken(token: JwtToken) {
        if (token === null) {
            sessionStorage.clear();
        } else {
            sessionStorage.setItem('access_token', token);
        }

        this.tokenSubject.next(token);
    }

    updateCurrentUser(user: User) {
        localStorage.setItem('current_user', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }

    get accessToken() {
        return this.tokenSubject.value;
    }

    private retrieveSession() {
        const savedUser = JSON.parse(localStorage.getItem('current_user'));
        this.currentUserSubject = new BehaviorSubject<User>(savedUser === 'null' ? null : savedUser);
        this.currentUser = this.currentUserSubject.asObservable();

        const savedToken = sessionStorage.getItem('access_token');
        this.tokenSubject = new BehaviorSubject<JwtToken>(savedToken === 'null' ? null : savedToken);
        this.token = this.tokenSubject.asObservable();
    }
}
