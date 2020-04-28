import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character/character.component';
import { GuildComponent } from './guild/guild.component';
import { DetailsRoutingModule } from './details-routing.module';
import { ComponentsModule } from '../shared/components.module';
import { CharacterService } from '@services/character.service';

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
        CharacterService
    ]
})
export class DetailsModule { }
