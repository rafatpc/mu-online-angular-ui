import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { GuildService } from './guild.service';
import { GuildData } from './guild.types';

@Injectable({
    providedIn: 'root'
})
export class GuildResolver implements Resolve<GuildData> {
    constructor(
        private guildService: GuildService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<GuildData> | Promise<GuildData> | GuildData {
        const { name } = route.params;
        return this.guildService.getGuildDetails(name);
    }
}
