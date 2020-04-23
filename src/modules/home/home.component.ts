import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'xweb-home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
    content: Array<{ title: string, content: string }> = [
        { title: 'Test #1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit' },
        { title: 'Test #2', content: 'Cras interdum lacus urna, et sollicitudin odio ultricies posuere.' }
    ];
}
