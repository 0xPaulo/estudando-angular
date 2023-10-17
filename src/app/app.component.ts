import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
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
