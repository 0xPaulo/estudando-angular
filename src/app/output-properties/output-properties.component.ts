import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrls: ['./output-properties.component.scss'],
})
export class OutputPropertiesComponent {
  @Output() mudouValor = new EventEmitter();
  @Input() valor: number = 0;
  incrementa() {
    this.valor++;
    // Quero expor o evento mudou
    this.mudouValor.emit({ novoValor: this.valor });
  }
  decrementa() {
    this.valor--;
    this.mudouValor.emit({ novoValor: this.valor });
  }
}
