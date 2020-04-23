import { Component } from '@angular/core';

@Component({
    selector: 'xweb-radio',
    inputs: ['id: checbox-id', 'name', 'label', 'checked'],
    templateUrl: './radio.component.html'
})
export class RadioComponent {
    name: string;
    value: string;
    label: string;
    id: string;
    checked: boolean = false;
}
