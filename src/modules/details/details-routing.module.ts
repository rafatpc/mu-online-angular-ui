import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterComponent } from './character/character.component'
import { GuildComponent } from './guild/guild.component';
import { AuthGuard } from 'src/modules/auth/auth.guard';

const routes: Routes = [
    { path: 'character/:name', component: CharacterComponent, canActivate: [AuthGuard] },
    { path: 'guild/:name', component: GuildComponent, canActivate: [AuthGuard] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRoutingModule { }
