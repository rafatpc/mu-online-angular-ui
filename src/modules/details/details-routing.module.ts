import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character/character.component'
import { GuildComponent } from './guild/guild.component';

const routes: Routes = [
    { path: 'character/:name', component: CharacterComponent },
    { path: 'guild/:name', component: GuildComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRoutingModule { }
