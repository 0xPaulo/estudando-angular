import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CursoService {
  getCursos() {
    return ['java', 'agular', 'Ext Js', 'teste'];
  }
  getPortal() {
    return 'https://loiane.trainin';
  }

  constructor() {}
}
