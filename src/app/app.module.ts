import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AcountModule } from './components/acount/acount.module';
import { DiscountsModule } from './components/discounts/discounts.module';
import { PersonsModule } from './components/persons/persons.module';
import { ResultsModule } from './components/results/results.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AcountModule,
    DiscountsModule,
    PersonsModule,
    ResultsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
