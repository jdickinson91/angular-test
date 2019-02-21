import { AbstractControl } from '@angular/forms';

export class PasswordValidationValidator {

  static MatchPassword (abstract_control: AbstractControl) {

    const password         = abstract_control.get('password').value;
    const confirm_password = abstract_control.get('confirm_password').value;

    if (password !== confirm_password &&
      (password !== null && confirm_password !== null) &&
      (password.length > 0 && confirm_password.length > 0)) {
      abstract_control.get('confirm_password').setErrors({MatchPassword: true});
    } else {
      return null;
    }
  }
}
