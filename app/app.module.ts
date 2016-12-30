import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { MyLabel }  from './atoms/label/label.component';
import { MyButton }  from './atoms/button/button.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MyLabel, MyButton ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
