import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InputFieldComponent } from './input-field/input-field.component';
import { NumberFieldComponent } from './number-field/number-field.component';

@NgModule({
  declarations: [
    InputFieldComponent,
    NumberFieldComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputFieldComponent,
    NumberFieldComponent
  ]
})
export class SharedComponentsModule { }
