import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingsComponent } from './rankings.component';
import { CharactersComponent } from './characters/characters.component'

const routes: Routes = [
    { path: '', component: RankingsComponent },
    { path: 'characters', component: CharactersComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RankingsRoutingModule { }
