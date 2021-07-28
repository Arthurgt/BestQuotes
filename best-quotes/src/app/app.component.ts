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
  showForm = false;
  quotes : Quotation[] = QUOTES;
  quotation : Quotation = {author : '', sentence : '', votes : 0};
  config: { [key: string]: string | Date } = null;

  constructor() {
    this.config = {
      title: 'list of reminders',
      footer: '© Artur Babkiewicz build in Angular',
      date: new Date()
    };
  }

  onSwitchForm() : void {
    this.showForm = !this.showForm;
  }

  addQuotation() : void {
    this.quotes.unshift(this.quotation);
    this.quotation = {author : '', sentence : '', votes : 0};
  }

  addVote(quotation : Quotation, value : number) : void {
    quotation.votes += value;
  }
}
