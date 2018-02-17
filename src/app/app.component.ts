import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  hidden: boolean;
  numbers: number[];
  clicksTimes: Date[];

  constructor() {
    this.hidden = false;
    this.numbers = [];
    this.clicksTimes = [];
  }

  isHidden(): boolean {
    return this.hidden;
  }

  onReverseHidden(): void {
    this.hidden = !this.isHidden();
    this.numbers.push(this.numbers.length === 0 ? 0 : 1 + this.numbers[this.numbers.length - 1]);
    this.clicksTimes.push(new Date());
  }

  getNumbers(): number[] {
    return this.numbers;
  }

  getClicksTimes(): Date[] {
    return this.clicksTimes;
  }
}
