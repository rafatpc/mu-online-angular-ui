import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RankingsRoutingModule } from './rankings-routing.module';
import { RankingsComponent } from './rankings.component';
import { StatusComponent } from '@components/status/status.component';
import { CharactersComponent } from './characters/characters.component';

@NgModule({
    declarations: [
        RankingsComponent,
        CharactersComponent,
        StatusComponent
    ],
    imports: [
        CommonModule,
        RankingsRoutingModule
    ]
})
export class RankingsModule { }
