import { Component, OnInit } from '@angular/core';
import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.css']
})
export class PersonsComponent implements OnInit {

  constructor( public tipService:TipService ) { }

  ngOnInit(): void {
  }

}
