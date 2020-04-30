import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <xweb-top-bar></xweb-top-bar>
        <xweb-header></xweb-header>
        <xweb-nav></xweb-nav>
        <xweb-content></xweb-content>
        <xweb-footer></xweb-footer>
    `
})
export class AppComponent { }
