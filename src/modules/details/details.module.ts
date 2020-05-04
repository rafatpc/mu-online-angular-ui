import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character/character.component';
import { GuildComponent } from './guild/guild.component';
import { DetailsRoutingModule } from './details-routing.module';
import { ComponentsModule } from '../shared/components.module';
import { CharacterService } from 'src/modules/character/character.service';
import { GuildService } from 'src/modules/guild/guild.service';

@NgModule({
    declarations: [
        CharacterComponent,
        GuildComponent
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        DetailsRoutingModule
    ],
    providers: [
        CharacterService,
        GuildService
    ]
})
export class DetailsModule { }
