import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { ItemsConfigResolver } from '../items/items.resolver';
import { CharacterPanelComponent } from '../character-panel/character-panel.component';
import { CharacterPanelRoutes } from '../character-panel/character-panel-routing.module';

import { CharactersComponent } from './characters/characters.component';
import { AccountCharactersResolver } from './account-characters.resolver';
import { AccountCharacterResolver } from './account-character.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'characters', canActivate: [AuthGuard] },
    {
        path: 'characters',
        component: CharactersComponent,
        canActivate: [AuthGuard],
        resolve: {
            characters: AccountCharactersResolver
        }
    },
    {
        path: 'character/:name',
        component: CharacterPanelComponent,
        children: CharacterPanelRoutes,
        canActivate: [AuthGuard],
        resolve: {
            character: AccountCharacterResolver,
            items: ItemsConfigResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
