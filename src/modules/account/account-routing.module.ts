import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component'
import { CharacterPanelComponent } from '../character-panel/character-panel.component';
import { CharacterPanelRoutes } from '../character-panel/character-panel-routing.module';
import { AuthGuard } from '../auth/auth.guard';

const routes: Routes = [
    { path: '', redirectTo: 'characters', canActivate: [AuthGuard] },
    { path: 'characters', component: CharactersComponent, canActivate: [AuthGuard] },
    {
        path: 'character/:name',
        component: CharacterPanelComponent,
        children: CharacterPanelRoutes,
        canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }
