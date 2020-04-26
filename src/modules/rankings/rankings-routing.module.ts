import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RankingsComponent } from './rankings.component';
import { CharactersComponent } from './characters/characters.component'
import { OnlineComponent } from './online/online.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
    { path: '', component: RankingsComponent },
    { path: 'characters', component: CharactersComponent },
    { path: 'online', component: OnlineComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RankingsRoutingModule { }
