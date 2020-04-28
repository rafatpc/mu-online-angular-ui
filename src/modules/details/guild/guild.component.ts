import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { GuildData } from '@type/guild.types';
import { ActivatedRoute } from '@angular/router';
import { GuildService } from '@services/guild.service';

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
            console.log(data);
            this.Guild = data;
            this.loading = false;
        });
    }
}
