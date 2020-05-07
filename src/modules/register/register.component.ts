import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent {
    // TODO: updateOn blur?
    username = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.required
    ]);

    password = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.required
    ]);

    repeat = new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(10),
        Validators.required
    ]);

    email = new FormControl('', [
        Validators.minLength(8),
        Validators.maxLength(50),
        Validators.required,
        Validators.email
    ]);
}
