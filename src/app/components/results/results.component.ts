import { Component, OnInit } from '@angular/core';
import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public tipService:TipService) { }

  ngOnInit(): void {
  }

  reset(){
    this.tipService.reset();
  }

}
