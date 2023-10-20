import { EventBindingComponent } from '../event-binding/event-binding.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  valor2: number = 15;
  paiMudouValor(evento: any) {
    console.log(evento.novoValor);
  }
}
