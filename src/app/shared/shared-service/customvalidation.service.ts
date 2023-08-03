import { Injectable } from '@angular/core';
import { ValidationErrors, AsyncValidatorFn, AbstractControl} from '@angular/forms';
import { Observable, of } from 'rxjs';


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

}