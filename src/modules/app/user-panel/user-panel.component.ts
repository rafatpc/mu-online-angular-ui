import { Component } from '@angular/core';
import { AuthenticationService } from '../../auth/auth.service';
import { AuthSessionService } from '../../auth/auth-session.service';

@Component({
    selector: 'xweb-user-panel',
    templateUrl: './user-panel.component.html'
})
export class UserPanelComponent {
    user: string;
    quickLinks: Array<{ route: string, title: string }> = [
        { route: '/account', title: 'My Account' },
        { route: '/account/characters', title: 'Characters' },
        { route: '/account/vote', title: 'Vote' },
    ];

    constructor(
        private auth: AuthenticationService,
        private session: AuthSessionService
    ) {
        this.session.currentUser.subscribe(user => {
            if (!user) return;
            this.user = user.memb___id;
        });
    }

    logout() {
        this.auth.logout();
    }
}
