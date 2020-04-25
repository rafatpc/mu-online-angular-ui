import { Component, Input } from '@angular/core';

@Component({
    selector: 'xweb-status',
    templateUrl: './status.component.html'
})
export class StatusComponent {
    @Input() type: string
}
