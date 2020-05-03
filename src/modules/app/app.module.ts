import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

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
import { ItemsService, itemsProviderFactory } from '@services/items.service';

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
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        BrowserAnimationsModule,
        ComponentsModule,
        HttpClientModule,
        AppRoutingModule,
        ToastrModule.forRoot({
            timeOut: 2500,
            extendedTimeOut: 1000,
            preventDuplicates: true,
            progressBar: true
        })
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: APP_INITIALIZER, useFactory: itemsProviderFactory, deps: [ItemsService], multi: true },
        AuthenticationService,
        SessionService,
        ItemsService
    ],
    bootstrap: [AppComponent],
    exports: []
})
export class AppModule { }
