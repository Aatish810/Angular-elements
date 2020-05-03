import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() title: String= '';
  @Input() number2: any = 0;
  @Input() number1: any = 0;
  @Output() onCalculation: EventEmitter<number> = new EventEmitter<number>();

  onClickHandle() {
    this.onCalculation.emit(Number.parseInt(this.number1) + Number.parseInt(this.number2))
  }

}
