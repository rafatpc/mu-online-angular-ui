import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CheckboxComponent } from '@component/checkbox/checkbox.components';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        LoginComponent,
        HeaderComponent,
        NavigationComponent,
        ContentComponent,
        FooterComponent,
        CheckboxComponent
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
