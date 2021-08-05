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
  quotes : Quotation[] = QUOTES;
  config: { [key: string]: string | Date } = null;

  constructor() {
    this.config = {
      title: 'list of reminders',
      footer: '© Artur Babkiewicz build in Angular',
      date: new Date()
    };
  }

  addVote(quotation : Quotation, value : number) : void {
    quotation.votes += value;
  }

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }

  onNewQuotation(quotation : Quotation) {
    this.quotes.unshift(quotation);
  }
}
