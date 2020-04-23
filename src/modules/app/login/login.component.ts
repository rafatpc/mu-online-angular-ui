import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '@service/authentication.service';
import { first } from 'rxjs/operators';

@Component({
    selector: 'xweb-login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
    loading: boolean = false;
    remember: boolean = true;
    returnUrl: string;

    constructor(
        private auth: AuthenticationService,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login({ username, password }: LoginFormData) {
        this.loading = true;

        this.auth.login(username, password)
            .pipe(first())
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                    console.log(data);
                },
                error => {
                    this.loading = false;
                }
            );
    }
}

type LoginFormData = {
    username: string;
    password: string
}
