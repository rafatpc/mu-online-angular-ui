import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharactersComponent } from './characters/characters.component'
import { OnlineComponent } from './online/online.component';
import { GuildsComponent } from './guilds/guilds.component';

const routes: Routes = [
    { path: '', redirectTo: 'characters' },
    { path: 'characters', component: CharactersComponent },
    { path: 'online', component: OnlineComponent },
    { path: 'guilds', component: GuildsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RankingsRoutingModule { }
