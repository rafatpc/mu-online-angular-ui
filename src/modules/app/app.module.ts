import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

import { AuthenticationService } from '@services/authentication.service';
import { SessionService } from '@services/session.service';

import { JwtInterceptor } from '../../interceptors/jwt.interceptor';
import { ComponentsModule } from '../shared/components.module';

@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        LoginComponent,
        UserPanelComponent,
        HeaderComponent,
        NavigationComponent,
        ContentComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        ComponentsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        AuthenticationService,
        SessionService
    ],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
