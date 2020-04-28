import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GuildData } from '@type/guild.types';

@Component({
    templateUrl: './guild.component.html'
})
export class GuildComponent implements OnInit {
    guilds: Array<GuildData> = [];

    constructor(private http: HttpClient) { }

    ngOnInit() {
        return this.http.get<any>(`${environment.apiUrl}/rankings/guilds`).subscribe((data: GuildData[]) => {
            this.guilds = data;
        });
    }
}
