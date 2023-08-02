import { Injectable } from '@angular/core';
import { FormBuilder, Validators, FormControl, ValidationErrors, AsyncValidatorFn, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { forkJoin } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

    validateEmailAsync(): AsyncValidatorFn {
        return (control: AbstractControl): Observable<ValidationErrors | null> => {
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
          const isValid = emailPattern.test(control.value);
          
          return isValid ? of(null) : of({ invalidEmail: true });
        };
      }


  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!control.value) {
            return null!;
        }
        const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
        const valid = regex.test(control.value);
        return valid ? null! : { invalidPassword: true };
    };
}

MatchPassword(password: string, confirmPassword: string) {
    return (formGroup: any) => {
        const passwordControl = formGroup.controls[password];
        const confirmPasswordControl = formGroup.controls[confirmPassword];

        if (!passwordControl || !confirmPasswordControl) {
            return null;
        }

        if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
            return null;
        }

        if (passwordControl.value !== confirmPasswordControl.value) {
            confirmPasswordControl.setErrors({ passwordMismatch: true });
            return { passwordMismatch: true }
        } else {
            confirmPasswordControl.setErrors(null);
            return null;
        }
        
    }
}

passwordValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {
      const password = control.value;
      const conditions = [
        /[0-9]/, // Must contain at least 1 number
        /[A-Z]/, // Must contain at least 1 capital case
        /[a-z]/, // Must contain at least 1 small case
        /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, // Must contain at least 1 special character
      ];
  
      const valid = conditions.every((condition) => condition.test(password));
  
      return valid ? null : { invalidPassword: true };
    };
  }

}