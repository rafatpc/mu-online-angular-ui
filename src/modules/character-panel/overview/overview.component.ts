import { Component } from '@angular/core';
import { AccountService } from '@services/account.service';
import { ActivatedRoute } from '@angular/router';
import { CharacterData } from '@type/character.types';

@Component({
    templateUrl: './overview.component.html'
})
export class OverviewComponent {
    Character: CharacterData = {} as any;
    loading: boolean = true;

    constructor(
        private route: ActivatedRoute,
        private account: AccountService
    ) { }

    ngOnInit() {
        // TODO: Implement Character resolver
        return this.route.params.subscribe((params: { name: string }) => {
            this.getCharacterDetails(params.name);
        });
    }

    private getCharacterDetails(name: string) {
        return this.account.getCharacter(name).subscribe((data: CharacterData) => {
            this.Character = data;
            this.loading = false;
        });
    }
}
