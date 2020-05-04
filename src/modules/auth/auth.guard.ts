import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { SessionService } from 'src/modules/auth/session.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private toastr: ToastrService,
        private session: SessionService,
        private router: Router
    ) { }

    canActivate(): boolean {
        if (this.session.accessToken === null) {
            // Direct access - navigate to the No access page
            if (!this.router.navigated) {
                this.router.navigate(['/login']);
            } else {
                this.toastr.error('Please, login first.', 'Access denied');
            }

            return false;
        }

        return true;
    }
}
