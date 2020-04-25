import { Component, Input } from '@angular/core';

@Component({
    selector: 'xweb-checkbox',
    templateUrl: './checkbox.component.html'
})
export class CheckboxComponent {
    @Input() name: string;
    @Input() label: string;
    @Input() checked: boolean = false;
    @Input('checkbox-id') id: string;
}
