import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardNumberDirective } from './credit-card-number.directive';

@NgModule({
  declarations: [CreditCardNumberDirective],
  imports: [
    CommonModule
  ],
  exports: [
    CreditCardNumberDirective
  ]
})

export class DirectivesModule { }
