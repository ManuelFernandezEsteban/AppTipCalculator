import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DiscountsComponent } from './discounts.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DiscountsComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    DiscountsComponent
  ]
})
export class DiscountsModule { }
