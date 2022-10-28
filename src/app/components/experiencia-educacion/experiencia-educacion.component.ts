import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { Experiencia } from 'src/app/model/experiencia';
import { EducacionService } from 'src/app/services/educacion.service';
import { SExperienciaService } from 'src/app/services/s-experiencia.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-experiencia-educacion',
  templateUrl: './experiencia-educacion.component.html',
  styleUrls: ['./experiencia-educacion.component.css'],
})
export class ExperienciaEducacionComponent implements OnInit {
  experiencias: Experiencia[] = [];

  educacion: Educacion[] = [];

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService,
    private sEducacion: EducacionService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    this.cargarEducacion();
    this.tokenService.getToken()
      ? (this.isLogged = true)
      : (this.isLogged = false);
  }

  cargarExperiencia(): void {
    this.sExperiencia.list().subscribe((data) => {
      this.experiencias = data;
    });
  }
  cargarEducacion(): void {
    this.sEducacion.lista().subscribe((data) => {
      this.educacion = data;
    });
  }

  deleteExperiencia(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          console.log(err);
          alert('No se pudo eliminar');
        }
      );
    }
  }
  deleteEducacion(id?: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(
        (data) => {
          this.cargarEducacion();
        },
        (err) => {
          console.log(err);
          alert('No se pudo eliminar');
        }
      );
    }
  }
}
