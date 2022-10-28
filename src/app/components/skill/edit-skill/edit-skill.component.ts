import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css'],
})
export class EditSkillComponent implements OnInit {
  skill: Skill = null;
  constructor(
    private sSkill: SkillService,
    private activateRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.sSkill.detail(id).subscribe(
      (data) => {
        this.skill = data;
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
    this.sSkill.update(id, this.skill).subscribe(
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
