import { Component } from '@angular/core';
import { MyLabel } from './atoms/label/label.component';
import { MyButton } from './atoms/button/button.component';

@Component({
  selector: 'my-app',
  // template: `<h1>Hello ji</h1>`
  template: `<h1>Hello <my-label [name]="text"></my-label></h1>
  <my-button [name]="button" (onClick)=handleButtonClick()></my-button>
  `,
})
export class AppComponent  {
  private text = 'Angular2';
  private button = "click me";
  handleButtonClick(){
    console.info("button is clicked");
  }
}
