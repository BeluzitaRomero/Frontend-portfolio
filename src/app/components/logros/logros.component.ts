import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/services/sproyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logros',
  templateUrl: './logros.component.html',
  styleUrls: ['./logros.component.css'],
})
export class LogrosComponent implements OnInit {
  proyectos: Proyecto[] = [];
  isAdmin: any;

  constructor(
    private tokenService: TokenService,
    private sProyecto: SProyectoService
  ) {}

  ngOnInit(): void {
    this.userAuthorithies();
    this.cargarProyecto();
  }

  cargarProyecto(): void {
    this.sProyecto.lista().subscribe((data) => {
      this.proyectos = data;
    });
  }

  deleteProyecto(id?: number) {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        (data) => {
          this.cargarProyecto();
        },
        (err) => {
          console.log(err);
          alert('No se pudo eliminar');
        }
      );
    }
  }

  userAuthorithies() {
    const authorithies: String[] = this.tokenService.getAuthorities();
    return (this.isAdmin = authorithies);
  }
}
