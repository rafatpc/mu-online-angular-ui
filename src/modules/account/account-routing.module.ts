import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component'
import { CharacterPanelComponent } from '../character-panel/character-panel.component';
import { ResetComponent } from '../character-panel/reset/reset.component';
import { GrandResetComponent } from '../character-panel/grand-reset/grand-reset.component';
import { OverviewComponent } from '../character-panel/overview/overview.component';
import { AddStatsComponent } from '../character-panel/add-stats/add-stats.component';
import { SwapStatsComponent } from '../character-panel/swap-stats/swap-stats.component';
import { ClearPkComponent } from '../character-panel/clear-pk/clear-pk.component';
import { ClearInventoryComponent } from '../character-panel/clear-inventory/clear-inventory.component';

const routes: Routes = [
    { path: '', redirectTo: 'characters' },
    { path: 'characters', component: CharactersComponent },
    {
        path: 'character/:name',
        component: CharacterPanelComponent,
        children: [
            { path: '', component: OverviewComponent, outlet: 'character-panel' },
            { path: 'reset', component: ResetComponent, outlet: 'character-panel' },
            { path: 'grand-reset', component: GrandResetComponent, outlet: 'character-panel' },
            { path: 'add-stats', component: AddStatsComponent, outlet: 'character-panel' },
            { path: 'swap-stats', component: SwapStatsComponent, outlet: 'character-panel' },
            { path: 'clear-pk', component: ClearPkComponent, outlet: 'character-panel' },
            { path: 'clear-inventory', component: ClearInventoryComponent, outlet: 'character-panel' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
