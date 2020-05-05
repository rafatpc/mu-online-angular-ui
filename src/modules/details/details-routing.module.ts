import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/auth.guard';
import { CharacterComponent } from './character/character.component'
import { GuildComponent } from './guild/guild.component';

import { CharacterResolver } from '../character/character.resolver';
import { ItemsConfigResolver } from '../items/items.resolver';
import { GuildResolver } from '../guild/guild.resolver';

const routes: Routes = [
    {
        path: 'character/:name',
        component: CharacterComponent,
        canActivate: [AuthGuard],
        resolve: {
            items: ItemsConfigResolver,
            character: CharacterResolver
        }
    },
    {
        path: 'guild/:name',
        component: GuildComponent,
        canActivate: [AuthGuard],
        resolve: {
            guild: GuildResolver
        }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DetailsRoutingModule { }
