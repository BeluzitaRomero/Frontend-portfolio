import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';

@Component({
  selector: 'app-nueva-experiencia',
  templateUrl: './nueva-experiencia.component.html',
  styleUrls: ['./nueva-experiencia.component.css'],
})
export class NuevaExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';
  imgExp: string = '';
  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const experiencia = new Experiencia(
      this.nombreExp,
      this.descripcionExp,
      this.imgExp
    );
    this.sExperiencia.save(experiencia).subscribe(
      (data) => {
        console.log('nueva experiencia: ', data);
        alert('Experiencia agregada');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al guardar');
        console.log(err);
        this.router.navigate(['']);
      }
    );
  }
}
