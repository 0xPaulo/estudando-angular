import { Component } from '@angular/core';

@Component({
  selector: 'app-criando-pipe',
  templateUrl: './criando-pipe.component.html',
})
export class CriandoPipeComponent {
  livro: any = {
    titulo: 'Estruturas de Dados e Algoritmos em JavaScript',
    rating: 4.21341,
    numeroPaginas: 300,
    preco: 49.99,
    dataLancamento: new Date(2016, 5, 23),
    url: 'https://www.google.com/',
  };
}
