import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.scss'],
})
export class CursoComponent implements OnInit {
  cursos: string[] = [];

  // cursoService: CursoService;
  constructor(private service: CursoService) {
    // injetando dentro de cursoSer o service
    // this.cursoService = this.service;
  }
  ngOnInit() {
    this.cursos = this.service.getCursos();
    // assim nao precina nem declarar a variavel
  }
  addCurso(curso: string) {
    this.service.addCurso(curso);
  }
}
