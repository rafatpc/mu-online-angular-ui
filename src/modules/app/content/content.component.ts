import { Component } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'xweb-content',
    templateUrl: './content.component.html'
})
export class ContentComponent {
    loading: boolean = true;

    constructor(private router: Router) {
        this.router.events
            .pipe(filter(
                event => event instanceof NavigationStart ||
                    event instanceof NavigationEnd ||
                    event instanceof NavigationCancel ||
                    event instanceof NavigationError
            ))
            .subscribe(event => {
                this.loading = event instanceof NavigationStart;
            });
    }
}
