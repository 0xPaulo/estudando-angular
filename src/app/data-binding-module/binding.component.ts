import { Component } from '@angular/core';

@Component({
  selector: 'binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.scss'],
})
export class BindingComponent {
  deletar: boolean = false;
  valorPai: number = 15;
  valorMudou() {
    this.valorPai++;
  }
  excluir() {
    if (this.deletar == true) {
      this.deletar = false;
    } else {
      this.deletar = true;
    }
  }
}
