import { Component } from '@angular/core';

@Component({
    selector: 'xweb-status',
    inputs: ['type'],
    templateUrl: './status.component.html'
})
export class StatusComponent {
    type: string
}
