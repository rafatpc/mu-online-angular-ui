import { Component } from '@angular/core';
import { AuthSessionService } from 'src/modules/auth/auth-session.service';

@Component({
    selector: 'xweb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isLoggedIn: boolean = true;

    constructor(private session: AuthSessionService) {
        this.session.token.subscribe(token => {
            this.isLoggedIn = !!token;
        });
    }
}
