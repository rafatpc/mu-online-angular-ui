import { Component, Input } from '@angular/core';

@Component({
    selector: 'xweb-radio',
    templateUrl: './radio.component.html'
})
export class RadioComponent {
    @Input() name: string;
    @Input() value: string;
    @Input() label: string;
    @Input('radio-id') id: string;
    @Input() checked: boolean = false;
}
