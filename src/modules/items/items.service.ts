import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription, BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ItemConfig, ItemConfigMap } from './items.types';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    readonly items$: BehaviorSubject<ItemConfigMap>;

    constructor(
        private http: HttpClient
    ) {
        this.items$ = new BehaviorSubject<ItemConfigMap>([]);
    }

    load() {
        return this.http.get<ItemConfig[]>(`${environment.apiUrl}/config/items`)
            .pipe(map(this.createItemsConfigMap))
            .subscribe((data: ItemConfigMap) => {
                this.items$.next(data);
                this.items$.complete();
            });
    }

    find(Type: number, Id: number): ItemConfig[] | null {
        const items = this.items$.value;

        if (!items[Type]) {
            return null;
        }

        return items[Type].filter(Item => Item.Id === Id);
    }

    private createItemsConfigMap(data: ItemConfig[]): ItemConfigMap {
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
