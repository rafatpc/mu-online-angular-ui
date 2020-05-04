import { Component, AfterViewInit, ViewChild, ChangeDetectorRef, ElementRef } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
    templateUrl: './register.component.html'
})
export class RegisterComponent implements AfterViewInit {
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

    // TODO: Fix that
    // matcher = new ErrorStateMatcher();

    @ViewChild('usernameInput') usernameInput: ElementRef;

    constructor(private changeDetector: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.usernameInput.nativeElement.focus();
        this.changeDetector.detectChanges();
    }
}
