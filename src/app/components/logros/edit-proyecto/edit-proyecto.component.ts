import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/sproyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css'],
})
export class EditProyectoComponent implements OnInit {
  proyecto: Proyecto = null;
  constructor(
    private activateRouter: ActivatedRoute,
    private router: Router,
    private sProyecto: SProyectoService
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sProyecto.detail(id).subscribe(
      (data) => {
        this.proyecto = data;
      },
      (err) => {
        console.log(err);
        alert('Error al modificar skill');
        this.router.navigate(['']);
      }
    );
  }

  update() {
    const id = this.activateRouter.snapshot.params['id'];
    this.sProyecto.update(id, this.proyecto).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar skill');
        console.log(err);
        this.router.navigate(['']);
      }
    );
  }
}
