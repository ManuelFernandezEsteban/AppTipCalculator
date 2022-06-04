import { Component, OnInit } from '@angular/core';
import { TipService } from '../../services/tip.service';


@Component({
  selector: 'app-acount',
  templateUrl: './acount.component.html',
  styleUrls: ['./acount.component.css']
})
export class AcountComponent implements OnInit {  

  constructor(public tipService:TipService) { }

  ngOnInit(): void {
  }



}
