import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsComponent } from './persons.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PersonsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],exports:[PersonsComponent]
})
export class PersonsModule { }
