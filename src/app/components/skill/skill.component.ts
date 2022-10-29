import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/model/skill';
import { SkillService } from 'src/app/services/skill.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills: Skill[] = [];

  constructor(
    private sSkill: SkillService,
    private tokenService: TokenService
  ) {}

  isAdmin: any;

  ngOnInit(): void {
    this.cargarSkill();
    this.userAuthorithies();
  }

  cargarSkill(): void {
    this.sSkill.lista().subscribe((data) => {
      this.skills = data;
    });
  }

  deleteSkill(id?: number) {
    if (id != undefined) {
      this.sSkill.delete(id).subscribe(
        (data) => {
          this.cargarSkill();
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
