import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { GuildData } from '../../guild/guild.types';
import { GuildService } from '../../guild/guild.service';

@Component({
    templateUrl: './guild.component.html'
})
export class GuildComponent implements OnInit {
    Guild: GuildData;

    constructor(
        private guildService: GuildService,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        return this.route.data.subscribe((data) => {
            this.Guild = data.guild;
        });
    }
}
