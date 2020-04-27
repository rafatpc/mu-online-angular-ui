import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StatusComponent } from '@components/status/status.component';
import { GuildMarkComponent } from '@components/guild-mark/guild-mark.component';
import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsComponent } from './rankings.component';
import { CharactersComponent } from './characters/characters.component';
import { OnlineComponent } from './online/online.component';
import { GuildsComponent } from './guilds/guilds.component';

@NgModule({
    declarations: [
        GuildMarkComponent,
        StatusComponent,
        RankingsComponent,
        CharactersComponent,
        GuildsComponent,
        OnlineComponent
    ],
    imports: [
        CommonModule,
        RankingsRoutingModule
    ]
})
export class RankingsModule { }
