import { Component, OnInit } from '@angular/core';

import { GuildData } from 'src/modules/guild/guild.types';
import { ActivatedRoute } from '@angular/router';
import { GuildService } from 'src/modules/guild/guild.service';

@Component({
    templateUrl: './guild.component.html'
})
export class GuildComponent implements OnInit {
    loading: boolean = true;
    Guild: GuildData = {} as GuildData;

    constructor(
        private guildService: GuildService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        return this.route.params.subscribe((params: { name: string }) => {
            this.getGuildDetails(params.name);
        });
    }

    private getGuildDetails(name: string) {
        return this.guildService.getGuildDetails(name).subscribe((data: GuildData) => {
            this.Guild = data;
            this.loading = false;
        });
    }
}
