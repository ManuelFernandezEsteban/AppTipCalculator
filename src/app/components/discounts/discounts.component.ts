import { Component, OnInit } from '@angular/core';
import { TipService } from '../../services/tip.service';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  constructor(public tipService:TipService) { }

  ngOnInit(): void {
  }
 

  calcular(x:any){    
    console.log(parseInt(x.target.value));
    this.tipService.calcularTip(parseInt(x.target.value));
  }

}
