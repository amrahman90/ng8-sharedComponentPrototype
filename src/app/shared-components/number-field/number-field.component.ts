import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { CONFIG } from '../config';

@Component({
  selector: 'custom-number-field',
  templateUrl: './number-field.component.html',
  styleUrls: ['./number-field.component.scss']
})
export class NumberFieldComponent implements OnInit {

  @Input()
  numberFieldName: string;
  @ViewChild('numberField')
  numberField: ElementRef;

  constructor() { }

  ngOnInit() {
    const numberEl: HTMLInputElement = this.numberField.nativeElement;
    numberEl.min = CONFIG.input.number.min;
    numberEl.max = CONFIG.input.number.max;
    numberEl.step = CONFIG.input.number.step;
  }

}

