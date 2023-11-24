import { Component, OnInit } from '@angular/core';
import { Curso } from './Curso';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  private cursos: Array<Curso> = [];
  constructor(private cursoService: CursosService) { }

  getCursos() {
    this.cursoService.getCursos().subscribe(cursos => {
      this.cursos = cursos;
    });
  }

  getCursosCertificate(): string{
    let respuesta: string = "Los cursos ";
    for (const curso of this.cursos) {
      if (curso.offers_certificate){
        respuesta += curso.id.toString() + " "; 
      }
    }
    respuesta += "ofrecen certificado"
    return respuesta
  }
  selectedCourse: any = {};
  isCardVisible: boolean = false;

  showCourseInfo(course: any): void {
    this.selectedCourse = course;
    this.isCardVisible = true;
  }

  ngOnInit() {
    this.getCursos();
  }

}
