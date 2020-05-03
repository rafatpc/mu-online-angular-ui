import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component'
import { CharacterPanelComponent } from '../character-panel/character-panel.component';
import { CharacterPanelRoutes } from '../character-panel/character-panel-routing.module';

const routes: Routes = [
    { path: '', redirectTo: 'characters' },
    { path: 'characters', component: CharactersComponent },
    {
        path: 'character/:name',
        component: CharacterPanelComponent,
        children: CharacterPanelRoutes
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
