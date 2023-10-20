import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.scss'],
})
export class EventBindingComponent {
  textoDigitado: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  indoPraOutroCom: string = 'angular';

  mouseOver() {
    this.isMouseOver = !this.isMouseOver;
  }

  botaoClicado() {
    alert('Clicou');
  }

  keyUp(valor: any) {
    this.textoDigitado = valor;
  }

  salvarValor(valor: any) {
    console.log('Valor inserido:', valor);
    this.valorSalvo = valor;
  }
}
