import { Component, Input } from '@angular/core';

@Component({
    selector: 'xweb-content-box',
    templateUrl: './content-box.component.html'
})
export class ContentBoxComponent {
    @Input() title: string;
    @Input() content: string;
}
