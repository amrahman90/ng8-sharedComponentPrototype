import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { CONFIG } from '../config';

@Component({
  selector: 'custom-input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss']
})
export class InputFieldComponent implements OnInit {

  @Input()
  inputName: string;
  @ViewChild('customInput')
  customInput: ElementRef;

  constructor() { }

  ngOnInit() {

    const maxChar = CONFIG.input.text.maxLength;

    if (maxChar) {
      this.customInput.nativeElement.maxLength = maxChar;
    }
  }

}
