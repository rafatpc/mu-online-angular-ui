import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';

import { ItemsService } from './items.service';
import { ItemConfigMap } from './items.types';

@Injectable({
    providedIn: 'root'
})
export class ItemsConfigResolver implements Resolve<boolean> {
    constructor(
        private itemsService: ItemsService
    ) { }

    resolve(): Observable<boolean> | Promise<boolean> | boolean {
        return this.itemsService.loaded$;
    }
}
