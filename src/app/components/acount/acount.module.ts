import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcountComponent } from './acount.component';



@NgModule({
  declarations: [
    AcountComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AcountComponent
  ]
})
export class AcountModule { }
