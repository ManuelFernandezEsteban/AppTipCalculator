import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent } from './results.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[ResultsComponent]
})
export class ResultsModule { }
