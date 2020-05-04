import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'xweb-loading',
    template: `
        <ng-container *ngIf="show">
            <img src="../../assets/images/loading.gif" alt="Loading..." />
        </ng-container>
    `
})
export class LoadingComponent {
    @Input()
    @HostBinding('class.overlay')
    show: boolean = true;
}
