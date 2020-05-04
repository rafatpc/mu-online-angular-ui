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
import { ClassNamePipe } from 'src/modules/character/class-name.pipe';
import { ClassImagePipe } from 'src/modules/character/class-image.pipe';
import { ClassCharacterImagePipe } from 'src/modules/character/class-character-image.pipe';
import { GuildPositionPipe } from 'src/pipes/guild-position.pipe';
import { GuildMasterPipe } from 'src/pipes/guild-master.pipe';
import { OnlineSincePipe } from 'src/pipes/online-since.pipe';
import { IsOnlinePipe } from 'src/pipes/is-online.pipe';
import { NumberFormatPipe } from 'src/pipes/number-format.pipe';
import { ItemImagePipe } from '../items/item-image.pipe';
import { ItemNamePipe } from '../items/item-name.pipe';
import { ItemInfoComponent } from '../items/item-info/item-info.component';
import { ItemExcellentOptionPipe } from '../items/item-excellent-option.pipe';
import { ItemTypeClassPipe } from '../items/item-type-class.pipe';

const Modules = [
    CheckboxComponent,
    ContentBoxComponent,
    GuildMarkComponent,
    StatusComponent,
    LoadingComponent,
    ItemInfoComponent,
    // Pipes
    PadZerosPipe,
    PkStatusPipe,
    MapNamePipe,
    ClassNamePipe,
    ClassImagePipe,
    ClassCharacterImagePipe,
    GuildPositionPipe,
    GuildMasterPipe,
    OnlineSincePipe,
    IsOnlinePipe,
    NumberFormatPipe,
    ItemImagePipe,
    ItemNamePipe,
    ItemExcellentOptionPipe,
    ItemTypeClassPipe
];

@NgModule({
    declarations: Modules,
    imports: [
        CommonModule
    ],
    exports: Modules
})
export class ComponentsModule { }
