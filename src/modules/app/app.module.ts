import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CheckboxComponent } from '@component/checkbox/checkbox.components';
import { HeaderComponent } from '@component/header/header.component';
import { NavigationComponent } from '@component/navigation/navigation.component';
import { TopBarComponent } from '@component/top-bar/top-bar.component';
import { FooterComponent } from '@component/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        CheckboxComponent,
        TopBarComponent,
        HeaderComponent,
        NavigationComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
