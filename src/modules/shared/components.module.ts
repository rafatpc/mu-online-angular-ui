import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBoxComponent } from '@components/content-box/content-box.components';
import { CheckboxComponent } from '@components/checkbox/checkbox.components';
import { GuildMarkComponent } from '@components/guild-mark/guild-mark.component';
import { StatusComponent } from '@components/status/status.component';
import { LoadingComponent } from '@components/loading/loading.component';
import { PadZerosPipe } from 'src/pipes/pad-zeros.pipe';
import { MapNamePipe } from 'src/pipes/map-decode.pipe';
import { PkStatusPipe } from 'src/pipes/pk-status.pipe';
import { ClassNamePipe } from 'src/pipes/class-name.pipe';
import { ClassImagePipe } from 'src/pipes/class-image.pipe';
import { ClassCharacterImagePipe } from 'src/pipes/class-character-image.pipe';
import { GuildPositionPipe } from 'src/pipes/guild-position.pipe';
import { GuildMasterPipe } from 'src/pipes/guild-master.pipe';
import { OnlineSincePipe } from 'src/pipes/online-since.pipe';

@NgModule({
    declarations: [
        CheckboxComponent,
        ContentBoxComponent,
        GuildMarkComponent,
        StatusComponent,
        LoadingComponent,
        // Pipes
        PadZerosPipe,
        PkStatusPipe,
        MapNamePipe,
        ClassNamePipe,
        ClassImagePipe,
        ClassCharacterImagePipe,
        GuildPositionPipe,
        GuildMasterPipe,
        OnlineSincePipe
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
        // Pipes
        PadZerosPipe,
        PkStatusPipe,
        MapNamePipe,
        ClassNamePipe,
        ClassImagePipe,
        ClassCharacterImagePipe,
        GuildPositionPipe,
        GuildMasterPipe,
        OnlineSincePipe
    ]
})
export class ComponentsModule { }
