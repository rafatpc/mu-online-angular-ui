import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountService } from '@services/account.service';

import { ComponentsModule } from '../shared/components.module';
import { AccountRoutingModule } from './account-routing.module';
import { CharactersComponent } from './characters/characters.component';
import { CharacterPanelComponent } from '../character-panel/character-panel.component';
import { ResetComponent } from '../character-panel/reset/reset.component';
import { GrandResetComponent } from '../character-panel/grand-reset/grand-reset.component';
import { OverviewComponent } from '../character-panel/overview/overview.component';

@NgModule({
    declarations: [
        CharactersComponent,
        CharacterPanelComponent,
        ResetComponent,
        GrandResetComponent,
        OverviewComponent
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
