import { Component } from '@angular/core';
import { User } from '../sharedClassesAndTypes/RegisterUser';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ForbiddenNameValidator } from '../custom-validations/userName.validator';
import { ConfirmPasswordValidator } from '../custom-validations/confirmPassword.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup;
  formIsValid = false;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.registerForm = this.fb.group(
      {
        userName: ['', [Validators.required, ForbiddenNameValidator]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', Validators.required],
        whereYouHear: ['', Validators.required],
      },
      {
        validator: ConfirmPasswordValidator,
      }
    );

    this.registerForm.statusChanges.subscribe((status) => {
      console.log(status);
      this.formIsValid = status === 'VALID';
    });
  }

  get userName() {
    return this.registerForm.get('userName');
  }

  get email() {
    return this.registerForm.get('email');
  }
  get password() {
    return this.registerForm.get('password');
  }
  get whereYouHear() {
    return this.registerForm.get('whereYouHear');
  }
  get confirmPassword() {
    return this.registerForm.get('confirmPassword');
  }
}
