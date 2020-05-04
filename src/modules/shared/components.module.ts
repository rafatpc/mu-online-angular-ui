import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentBoxComponent } from 'src/modules/shared/content-box/content-box.components';
import { CheckboxComponent } from 'src/modules/shared/checkbox/checkbox.components';
import { GuildMarkComponent } from 'src/modules/guild/guild-mark/guild-mark.component';
import { StatusComponent } from 'src/modules/character/status/status.component';
import { LoadingComponent } from 'src/modules/shared/loading/loading.component';
import { PadZerosPipe } from 'src/modules/shared/pad-zeros.pipe';
import { MapNamePipe } from 'src/modules/map/map-decode.pipe';
import { PkStatusPipe } from 'src/modules/character/pk-status.pipe';
import { ClassNamePipe } from 'src/modules/class/class-name.pipe';
import { ClassImagePipe } from 'src/modules/class/class-image.pipe';
import { ClassCharacterImagePipe } from 'src/modules/class/class-character-image.pipe';
import { GuildPositionPipe } from 'src/modules/guild/guild-position.pipe';
import { GuildMasterPipe } from 'src/modules/guild/guild-master.pipe';
import { OnlineSincePipe } from 'src/modules/rankings/online/online-since.pipe';
import { IsOnlinePipe } from 'src/modules/character/is-online.pipe';
import { NumberFormatPipe } from 'src/modules/shared/number-format.pipe';
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
