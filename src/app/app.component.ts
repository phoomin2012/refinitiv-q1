import { Component } from '@angular/core';

import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  options = ['isPrime', 'isFibonacci']
  choice = new FormControl(this.options[0])
  userInput = new FormControl('')


  get inputValue() {
    if (this.choice.value === this.options[0]) {
      let isPrime = true;

      if (this.userInput.value === 1) {
        return 'true'
      }

      const number = parseInt(this.userInput.value);
      for (let i = 2; i < number; i++) {
        if (number % i == 0) {
          isPrime = false;
          break;
        }
      }

      return isPrime ? 'true' : 'false';
    } else if (this.choice.value === this.options[1]) {
      return isFibonacci(parseInt(this.userInput.value)) ? 'true' : 'false';
    } else {
      return 'false';
    }
  }
}

function isFibonacci(num: number, a = 0, b = 1): boolean {
  if (num === 0 || num === 1) {
    return true;
  }

  let nextNumber = a + b;

  if (nextNumber === num) {
    return true;
  } else if (nextNumber > num) {
    return false;
  }

  return isFibonacci(num, b, nextNumber);
}