import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TipService {


  public discount: string = '';
  public bill: string = '';
  public person: string = '';
  public total: number = 0;
  public tip: number = 0;
  public error: string = '';
  public hayError: boolean = false;
  public hayResultados: boolean = false;

  constructor() { }

  reset() {
    this.discount = '';
    this.bill = '';
    this.total = 0;
    this.tip = 0;
    this.person = '';
    this.error = '';
    this.hayError = false;
    this.hayResultados = false;
  }

  calcularTip(percent: number) {

    const personas = parseInt(this.person);
    const factura = parseFloat(this.bill);
    if (isNaN(personas) || isNaN(factura)) {
      this.error = 'error';
      this.hayError = true;
    }
    else {
      const porcentaje = percent / 100;
      this.error = '';
      this.hayError = false;
      this.hayResultados = true;
      this.tip = factura * porcentaje / personas;
      this.total = ((factura * porcentaje) + factura) / personas;
    }


  }

}
