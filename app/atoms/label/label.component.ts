import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-label',
  template: `<label class="">{{name}}</label>`,
})
export class MyLabel  {
  @Input() private name: string;
  constructor(){
    console.debug('entry');
  }
}
