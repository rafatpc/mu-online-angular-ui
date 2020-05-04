import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../shared/components.module';
import { AccountRoutingModule } from './account-routing.module';
import { AccountService } from './account.service';

import { CharactersComponent } from './characters/characters.component';
import { CharacterPanelComponent } from '../character-panel/character-panel.component';
import { CharacterPanelComponents } from '../character-panel/character-panel.module';

@NgModule({
    declarations: [
        CharactersComponent,
        CharacterPanelComponent,
        ...CharacterPanelComponents
    ],
    imports: [
        CommonModule,
        ComponentsModule,
        AccountRoutingModule
    ],
    providers: [
        AccountService
    ]
})
export class AccountModule { }
