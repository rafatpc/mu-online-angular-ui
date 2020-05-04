import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { GuildData } from './guild.types';

@Injectable({ providedIn: 'root' })
export class GuildService {
    constructor(
        private http: HttpClient
    ) { }

    getGuildDetails(name: string): Observable<GuildData> {
        return this.http.get<GuildData>(`${environment.apiUrl}/guild/${name}`);
    }

    getGuildRankings() {
        return this.http.get<GuildData[]>(`${environment.apiUrl}/rankings/guilds`);
    }
}
