import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ModuleService } from '../../module/module.service';
import { ModuleConfig } from '../../module/module.types';
import { CharacterData } from '../../character/character.types';

@Component({ templateUrl: './reset.component.html' })
export class ResetComponent implements OnInit {
    Character: CharacterData;
    Module: ModuleConfig;

    constructor(
        private readonly route: ActivatedRoute,
        private readonly moduleService: ModuleService
    ) { }

    ngOnInit() {
        this.route.data.subscribe((data) => {
            this.Character = data.character;
            this.Module = data.module;
        });
    }

    action() {
        console.error('Not implemented.');
        return false;
    }
}
