import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {
  // tem que colocar no modulo como um provider
  getCursos() {
    return ['Angular', 'Java', 'SpringBoot'];
  }
}
