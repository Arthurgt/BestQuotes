import { ValueTransformer } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { QUOTES } from './models/data-base';
import { Quotation } from './models/quotation';

@Component({
  selector : 'app-root',
  templateUrl : './app.component.html',
  styleUrls : ['./app.component.css']
})
export class AppComponent {
  config: { [key: string]: string | Date } = null;

  constructor() {
    this.config = {
      title: 'list of reminders',
      footer: '© Artur Babkiewicz build in Angular',
      date: new Date()
    };
  }

  onNewQuotation(quotes : Quotation[], quotation : Quotation) {
    quotes.unshift(quotation);
  }
}
