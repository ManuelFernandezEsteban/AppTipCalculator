import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsComponent } from './discounts.component';



@NgModule({
  declarations: [DiscountsComponent],
  imports: [
    CommonModule
  ],
  exports:[
    DiscountsComponent
  ]
})
export class DiscountsModule { }
