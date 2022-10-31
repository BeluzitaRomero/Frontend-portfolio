import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/sproyecto.service';

@Component({
  selector: 'app-nuevo-proyecto',
  templateUrl: './nuevo-proyecto.component.html',
  styleUrls: ['./nuevo-proyecto.component.css'],
})
export class NuevoProyectoComponent implements OnInit {
  nombreProyecto: string = '';

  linkDeployProyecto: string = '';
  linkRepoProyecto: string = '';
  descripcionProyecto: string = '';
  img1: string = '';
  img2: string = '';
  img3: string = '';
  constructor(private sProyecto: SProyectoService, private router: Router) {}

  ngOnInit(): void {}
  onCreate(): void {
    const proyecto = new Proyecto(
      this.nombreProyecto,
      this.linkDeployProyecto,
      this.linkRepoProyecto,
      this.descripcionProyecto,
      this.img1,
      this.img2,
      this.img3
    );

    this.sProyecto.save(proyecto).subscribe(
      (data) => {
        console.log(proyecto);
        alert('Proyecto agregado');
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
