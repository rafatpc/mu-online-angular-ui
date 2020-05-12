import { Routes } from '@angular/router';

import { ModuleResolver } from '../module/module.resolver';
import { ParentCharacterResolver } from '../character/parent-character.resolver';

import { OverviewComponent } from './overview/overview.component';
import { ResetComponent } from './reset/reset.component';
import { GrandResetComponent } from './grand-reset/grand-reset.component';
import { AddStatsComponent } from './add-stats/add-stats.component';
import { SwapStatsComponent } from './swap-stats/swap-stats.component';
import { ClearPkComponent } from './clear-pk/clear-pk.component';
import { ClearInventoryComponent } from './clear-inventory/clear-inventory.component';

export const CharacterPanelRoutes: Routes = [
    { path: '', component: OverviewComponent, outlet: 'character-panel' },
    {
        path: 'reset',
        component: ResetComponent,
        resolve: {
            module: ModuleResolver,
            character: ParentCharacterResolver
        },
        outlet: 'character-panel'
    },
    { path: 'grand-reset', component: GrandResetComponent, outlet: 'character-panel' },
    { path: 'add-stats', component: AddStatsComponent, outlet: 'character-panel' },
    { path: 'swap-stats', component: SwapStatsComponent, outlet: 'character-panel' },
    { path: 'clear-pk', component: ClearPkComponent, outlet: 'character-panel' },
    { path: 'clear-inventory', component: ClearInventoryComponent, outlet: 'character-panel' }
];

