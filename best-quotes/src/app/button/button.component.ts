import { EventEmitter, Input } from '@angular/core';
import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Output()
  clickMyButton = new EventEmitter<void>();
  @Input()
  customClasses : string;
}
