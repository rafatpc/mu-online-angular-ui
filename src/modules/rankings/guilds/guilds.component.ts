import { Component, OnInit } from '@angular/core';

import { GuildData } from '../../guild/guild.types';
import { GuildService } from 'src/modules/guild/guild.service';

@Component({
    templateUrl: './guilds.component.html'
})
export class GuildsComponent implements OnInit {
    guilds: GuildData[] = [];
    loading: boolean = true;

    constructor(
        private guildService: GuildService
    ) { }

    ngOnInit() {
        return this.guildService.getGuildRankings().subscribe((data: GuildData[]) => {
            this.guilds = data;
            this.loading = false;
        });
    }
}
