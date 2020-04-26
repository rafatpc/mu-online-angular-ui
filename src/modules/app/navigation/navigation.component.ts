import { Component } from '@angular/core';

@Component({
    selector: 'xweb-nav',
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {
    submenu: Array<MenuItem>;

    routes: Array<MenuItem> = [
        { route: '/', title: 'Home' },
        { route: '/downloads', title: 'Downloads' },
        {
            route: '/rankings', title: 'Rankings', children: [
                { route: '/rankings/characters', title: 'characters' },
                { route: '/rankings/killers', title: 'killers' },
                { route: '/rankings/voters', title: 'voters' },
                { route: '/rankings/guilds', title: 'guilds' },
                { route: '/rankings/online', title: 'online' },
                { route: '/rankings/banned', title: 'banned' },
                { route: '/rankings/admins', title: 'admins' },
                { route: '/rankings/devil-square', title: 'devil square' },
                { route: '/rankings/blood-castle', title: 'blood castle' }
            ]
        },
    ];

    displaySubMenu(items: Array<MenuItem>) {
        this.submenu = items || [];
    }
}

type MenuItem = {
    route: string;
    title: string;
    children?: Array<MenuItem>
}
