import { Component } from '@angular/core';
import { AuthenticationService } from '@services/authentication.service';

@Component({
    selector: 'xweb-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    isLoggedIn: boolean = true;

    constructor(
        private auth: AuthenticationService
    ) {
        this.auth.token.subscribe(token => {
            this.isLoggedIn = !!token;
        });
    }
}
