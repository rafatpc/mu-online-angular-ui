import { Component } from '@angular/core';

@Component({
    selector: 'xweb-checkbox',
    inputs: ['id: checbox-id', 'name', 'label', 'checked'],
    templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
    name: string;
    label: string;
    checked: boolean = false;
    id: string;
}
