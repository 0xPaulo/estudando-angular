import { Component, Input } from '@angular/core';

@Component({
  selector: 'outro',
  templateUrl: './input-properties.component.html',
  styleUrls: ['./input-properties.component.scss'],
})
export class InputPropertiesComponent {
  // @Input expoem para o 'outro' essa propriedade
  @Input() variavel: string = 'bla bla bla ';
}
