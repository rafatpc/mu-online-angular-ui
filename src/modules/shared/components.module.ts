import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBoxComponent } from './content-box/content-box.components';
import { CheckboxComponent } from './checkbox/checkbox.components';
import { LoadingComponent } from './loading/loading.component';
import { StatusComponent } from './status/status.component';
import { NumberFormatPipe } from './number-format.pipe';
import { PadZerosPipe } from './pad-zeros.pipe';
// Account-related
import { OnlineSincePipe } from '../account/online-since.pipe';
// Character-related
import { MapNamePipe } from '../map/map-decode.pipe';
import { PkStatusPipe } from '../character/pk-status.pipe';
import { ClassCharacterImagePipe } from '../class/class-character-image.pipe';
import { ClassNamePipe } from '../class/class-name.pipe';
import { ClassImagePipe } from '../class/class-image.pipe';
import { IsOnlinePipe } from '../character/is-online.pipe';
// Guild-related
import { GuildMarkComponent } from '../guild/guild-mark/guild-mark.component';
import { GuildPositionPipe } from '../guild/guild-position.pipe';
import { GuildMasterPipe } from '../guild/guild-master.pipe';
// Items-related
import { ItemInfoComponent } from '../items/item-info/item-info.component';
import { ItemExcellentOptionPipe } from '../items/item-excellent-option.pipe';
import { ItemTypeClassPipe } from '../items/item-type-class.pipe';
import { ItemImagePipe } from '../items/item-image.pipe';
import { ItemNamePipe } from '../items/item-name.pipe';

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
