import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsComponent } from './rankings.component';
import { CharactersComponent } from './characters/characters.component';
import { OnlineComponent } from './online/online.component';
import { GuildsComponent } from './guilds/guilds.component';
import { ComponentsModule } from '../shared/components.module';

import { CharacterService } from '@services/character.service.ts';

@NgModule({
    declarations: [
        RankingsComponent,
        CharactersComponent,
        GuildsComponent,
        OnlineComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        RankingsRoutingModule
    ],
    providers: [
        CharacterService
    ]
})
export class RankingsModule { }
