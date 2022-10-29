import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-header',
  templateUrl: './edit-header.component.html',
  styleUrls: ['./edit-header.component.css'],
})
export class EditHeaderComponent implements OnInit {
  persona: Persona = null;
  constructor(
    private sPersona: PersonaService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sPersona.detail(2).subscribe(
      (data) => {
        this.persona = data;
      },
      (err) => {
        console.log(err);
        alert('Error al modificar datos personales');
        this.router.navigate(['']);
      }
    );
  }

  update() {
    const id = this.activateRouter.snapshot.params['id'];
    this.sPersona.update(id, this.persona).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar datos personales');
        console.log(err);
        this.router.navigate(['']);
      }
    );
  }
}
