import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { ItemConfig, ItemConfigMap, DecodedItem, ItemConfigRaw, ItemConfigRawMapped, Socket } from './items.types';

@Injectable({ providedIn: 'root' })
export class ItemsService {
    readonly loaded$: BehaviorSubject<boolean>;
    readonly items$: BehaviorSubject<ItemConfigMap>;
    readonly sockets$: BehaviorSubject<Socket[]>;

    constructor(
        private http: HttpClient
    ) {
        this.loaded$ = new BehaviorSubject<boolean>(false);
        this.items$ = new BehaviorSubject<ItemConfigMap>([]);
        this.sockets$ = new BehaviorSubject<Socket[]>([]);
    }

    load() {
        return this.http.get<ItemConfigRaw>(`${environment.apiUrl}/config/items`)
            .pipe(map(this.createItemsConfigMap))
            .subscribe((data: ItemConfigRawMapped) => {
                this.sockets$.next(data.Sockets);
                this.items$.next(data.Items);
                this.loaded$.next(true);
                this.loaded$.complete();
            });
    }

    getItem(Type: number, Id: number, Level?: number): ItemConfig[] | null {
        const items = this.items$.value;

        if (!items[Type]) {
            return null;
        }

        const found = items[Type].filter(Item => Item.Id === Id);

        if (found.some(Item => Item.Level === Level)) {
            return found.filter(Item => Item.Level === Level);
        }

        return found;
    }

    getConfig(Item: DecodedItem): ItemConfig {
        const { group, id, level } = Item;
        return this.getItem(group, id, level)[0];
    }

    getSocket(Type): Socket {
        const sockets = this.sockets$.value;
        return sockets.find(Socket => Socket.Id === Type);
    }

    private createItemsConfigMap(data: ItemConfigRaw): ItemConfigRawMapped {
        const Items = data.Items.reduce((Items, Item: ItemConfig) => {
            return {
                ...Items,
                [Item.Type]: [
                    ...Items[Item.Type] || [],
                    Item
                ]
            };
        }, {});

        return {
            Items,
            Sockets: data.Sockets
        }
    }
}

export function itemsProviderFactory(provider: ItemsService) {
    return () => provider.load();
}
