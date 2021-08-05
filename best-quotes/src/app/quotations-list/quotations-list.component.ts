import { Component } from '@angular/core';
import { QUOTES } from '../models/data-base';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-quotations-list',
  templateUrl: './quotations-list.component.html',
  styleUrls: ['./quotations-list.component.css']
})
export class QuotationsListComponent {
  quotes : Quotation[] = QUOTES;

  bestQuotes() {
    return this.quotes.filter(q => q.votes > 0);
  }

  worstQuotes() {
    return this.quotes.filter(q => q.votes < 0);
  }
}
