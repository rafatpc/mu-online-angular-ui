import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ContentBoxComponent } from '@component/content-box/content-box.components';

@NgModule({
    declarations: [
        HomeComponent,
        ContentBoxComponent
    ],
    imports: [
        CommonModule,
        HomeRoutingModule
    ]
})
export class HomeModule { }
