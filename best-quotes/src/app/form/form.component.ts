import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component} from '@angular/core';
import { Quotation } from '../models/quotation';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent{
  showForm : boolean = false;
  quotation : Quotation = {author : '', sentence : '', votes : 0};
  @Output()
  newQuotation = new EventEmitter<Quotation>();

  onSwitchForm() : void {
    this.showForm = !this.showForm;
  }

  addQuotation() : void {
    this.newQuotation.emit(this.quotation);
    this.quotation = {author : '', sentence : '', votes : 0};
  }
}
