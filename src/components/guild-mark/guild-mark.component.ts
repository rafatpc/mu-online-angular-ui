import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'xweb-guild-mark',
    template: `
        <div *ngFor="let row of markMatrix" class="row">
            <div *ngFor="let color of row" [ngClass]="'color-' + color" class="color"></div>
        </div>
    `
})
export class GuildMarkComponent implements OnInit {
    @Input() mark: string;

    markMatrix: string[][] = [];

    ngOnInit() {
        const mark: string = this.mark.indexOf('0x') === 0 ? this.mark.substring(2) : this.mark;
        this.markMatrix = mark.match(/.{1,8}/g).map(row => Array.from(row));
    }
}
