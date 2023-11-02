import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class CursoService {
  constructor() {
    console.log(CursoService);
  }
  // tem que colocar no modulo como um provider
  // para usar em toda a aplicaçao pode colocar no root funciona
  // para usar apenas no component tem que declarar dentro dele
  // se declarar dentro do modulo dele e esse modulo for importado por outro
  // todos os outros modulos que esse modulo pai esta importando
  // consiguira usar, o angular fica subindo procurando

  cursos: string[] = ['Angular', 'Java', 'SpringBoot'];
  emitirCursoCriado = new EventEmitter<string>();
  // this.emitirCursoCriado.emit(curso);
  // pode ser feito tambem global
  // porem o acesso é diferente
  static criouNovoCurso = new EventEmitter<string>();
  // CursoService.criouNovoCurso.emit(curso);

  getCursos() {
    return this.cursos;
  }
  addCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursoService.criouNovoCurso.emit(curso);
  }
}
