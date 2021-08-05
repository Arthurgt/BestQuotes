import { Component, Input } from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-vote-panel',
  templateUrl: './vote-panel.component.html',
  styleUrls: ['./vote-panel.component.css']
})
export class VotePanelComponent {
  @Input()
  quotationToVote : Quotation;
  
  addVote(quotation : Quotation, value : number) : void {
    quotation.votes += value;
  }
}
