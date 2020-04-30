import { NgModule } from "@angular/core";
import { RegisterComponent } from './register.component';
import { RegisterRoutingModule } from './register-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule
    ]
})
export class RegisterModule { }
