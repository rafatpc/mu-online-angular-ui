import { Component } from '@angular/core';
import { SessionService } from 'src/modules/auth/session.service';

@Component({
    selector: 'xweb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isLoggedIn: boolean = true;

    constructor(private session: SessionService) {
        this.session.token.subscribe(token => {
            this.isLoggedIn = !!token;
        });
    }
}
