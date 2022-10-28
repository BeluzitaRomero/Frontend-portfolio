import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/services/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css'],
})
export class NuevaEducacionComponent implements OnInit {
  nombreEdu: string = '';
  descripcionEdu: string = '';
  imgEdu: string = '';
  constructor(private sEducacion: EducacionService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(
      this.nombreEdu,
      this.descripcionEdu,
      this.imgEdu
    );
    this.sEducacion.save(educacion).subscribe(
      (data) => {
        console.log('nueva experiencia: ', data);
        alert('Educacion agregada');
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
