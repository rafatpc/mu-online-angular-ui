import { Pipe, PipeTransform } from '@angular/core';

import { BonusSockets } from './socket-options.data';
import { SocketOption } from './items.types';
import { ItemsService } from './items.service';

@Pipe({ name: 'ItemSocketBonus' })
export class ItemSocketBonusPipe implements PipeTransform {
    constructor(private itemsService: ItemsService) { }

    transform(Sockets: SocketOption[]): any[] {
        const SocketsConfig: number[] = Sockets.map(Socket => {
            if (!Socket || Socket.type === null) {
                return 0;
            }

            return this.itemsService.getSocket(Socket.type).Type;
        });

        return BonusSockets.reduce((Bonuses, Bonus) => {
            let [Name, Value, ...Required] = Bonus;

            const RequiredSequence = Required.filter(Requirement => Requirement !== 0);

            SocketsConfig.forEach(Type => {
                if (Type === RequiredSequence[0]) {
                    RequiredSequence.shift();
                }
            });

            if (RequiredSequence.length !== 0) {
                return Bonuses;
            }

            return [
                ...Bonuses,
                { Name, Value }
            ];
        }, []);
    }
}
