import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { ItemConfig, ItemConfigMap } from 'src/modules/items/items.types';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    private items: ItemConfigMap = {};

    constructor(
        private http: HttpClient
    ) { }

    load(): Subscription {
        return this.http.get<ItemConfig[]>(`${environment.apiUrl}/config/items`)
            .pipe(map(this.createItemsConfigMap))
            .subscribe((data: ItemConfigMap) => {
                this.items = data;
                return data;
            });
    }

    find(Type: number, Id: number): ItemConfig[] | null {
        if (!this.items[Type]) {
            return null;
        }

        return this.items[Type].filter(Item => Item.Id === Id);
    }

    private createItemsConfigMap(data: ItemConfig[]) {
        return data.reduce((Items, Item: ItemConfig) => {
            return {
                ...Items,
                [Item.Type]: [
                    ...Items[Item.Type] || [],
                    Item
                ]
            };
        }, {});
    }
}

export function itemsProviderFactory(provider: ItemsService) {
    return () => provider.load();
}
