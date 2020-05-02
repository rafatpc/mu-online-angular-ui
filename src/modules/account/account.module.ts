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
import { AddStatsComponent } from '../character-panel/add-stats/add-stats.component';
import { SwapStatsComponent } from '../character-panel/swap-stats/swap-stats.component';
import { ClearPkComponent } from '../character-panel/clear-pk/clear-pk.component';
import { ClearInventoryComponent } from '../character-panel/clear-inventory/clear-inventory.component';

@NgModule({
    declarations: [
        CharactersComponent,
        CharacterPanelComponent,
        OverviewComponent,
        ResetComponent,
        GrandResetComponent,
        AddStatsComponent,
        SwapStatsComponent,
        ClearPkComponent,
        ClearInventoryComponent
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
