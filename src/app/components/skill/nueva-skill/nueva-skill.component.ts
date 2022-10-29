import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-nueva-skill',
  templateUrl: './nueva-skill.component.html',
  styleUrls: ['./nueva-skill.component.css'],
})
export class NuevaSkillComponent implements OnInit {
  nombre: string = '';
  porcentaje: number;

  constructor(private sSkill: SkillService, private router: Router) {}

  ngOnInit(): void {}

  onCreate(): void {
    const skill = new Skill(this.nombre, this.porcentaje);
    this.sSkill.save(skill).subscribe(
      (data) => {
        alert('Skill agregada');
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
