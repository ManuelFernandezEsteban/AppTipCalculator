import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcountComponent } from './acount.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AcountComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    AcountComponent
  ]
})
export class AcountModule { }
