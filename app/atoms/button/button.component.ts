import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `<button class="" (click)="onClick.emit()">{{name}}</button>`,
})
export class MyButton  {
  @Input() private name: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor(){
    console.debug('entry');
  }
}
