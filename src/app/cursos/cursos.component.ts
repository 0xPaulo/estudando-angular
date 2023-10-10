import { Component } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss'],
})
export class CursosComponent {
  nomePortal: string;
  cursos: string[];

  constructor(private cursoService: CursoService) {
    this.nomePortal = this.cursoService.getPortal();

    this.cursos = this.cursoService.getCursos();
  }
}
