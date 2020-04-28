import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBoxComponent } from '@components/content-box/content-box.components';
import { CheckboxComponent } from '@components/checkbox/checkbox.components';
import { GuildMarkComponent } from '@components/guild-mark/guild-mark.component';
import { StatusComponent } from '@components/status/status.component';
import { PadZerosPipe } from 'src/pipes/pad-zeros.pipe';
import { LoadingComponent } from '@components/loading/loading.component';

@NgModule({
    declarations: [
        CheckboxComponent,
        ContentBoxComponent,
        GuildMarkComponent,
        StatusComponent,
        LoadingComponent,
        PadZerosPipe
    ],
    imports: [
        CommonModule
    ],
    exports: [
        CheckboxComponent,
        ContentBoxComponent,
        GuildMarkComponent,
        StatusComponent,
        LoadingComponent,
        PadZerosPipe
    ]
})
export class ComponentsModule { }
