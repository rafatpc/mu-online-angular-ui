import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/user/login`, { username, password });
    }

    verify() {
        return this.http.post<any>(`${environment.apiUrl}/user/verify`, null);
    }
}
