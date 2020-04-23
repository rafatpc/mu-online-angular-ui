import { Component } from "@angular/core";

@Component({
    selector: 'xweb-content-box',
    inputs: ['title', 'content'],
    templateUrl: './content-box.component.html'
})
export class ContentBoxComponent {
    title: string;
    content: string;
}
