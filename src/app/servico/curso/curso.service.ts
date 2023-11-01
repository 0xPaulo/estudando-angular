import { Injectable } from '@angular/core';

@Injectable()
export class CursoService {
  // tem que colocar no modulo como um provider
  // para usar em toda a aplicaçao pode colocar no root funciona

  cursos: string[] = ['Angular', 'Java', 'SpringBoot'];
  getCursos() {
    return this.cursos;
  }
  addCurso(curso: string) {
    this.cursos.push(curso);
  }
}
