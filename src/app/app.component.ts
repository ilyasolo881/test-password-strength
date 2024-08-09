import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class AppComponent {
  title = 'my-angular-app';
  password: string = '';
  strengthClass: string[] = ['gray', 'gray', 'gray'];

  passwordStrength(): void {
    const minLengthStrenght = this.password.length >= 8;
    const hasLetters = /[a-zA-Z]/.test(this.password);
    const hasNumbers = /[0-9]/.test(this.password);
    const hasSymbols = /[!@#$%^&*(),.?":{}|<>]/.test(this.password);

    if (!minLengthStrenght) {
      this.strengthClass = ['red', 'red', 'red'];
    } else if (
      (hasLetters && !hasNumbers && !hasSymbols) ||
      (!hasLetters && hasNumbers && !hasSymbols) ||
      (!hasLetters && !hasNumbers && hasSymbols)
    ) {
      this.strengthClass = ['red', 'gray', 'gray'];
    } else if (
      (hasLetters && hasNumbers && !hasSymbols) ||
      (hasLetters && !hasNumbers && hasSymbols) ||
      (!hasLetters && hasNumbers && hasSymbols)
    ) {
      this.strengthClass = ['yellow', 'yellow', 'gray'];
    } else if (hasLetters && hasNumbers && hasSymbols) {
      this.strengthClass = ['green', 'green', 'green'];
    } else {
      this.strengthClass = ['gray', 'gray', 'gray'];
    }
  }
}
