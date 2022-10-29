import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  persona: Persona = new Persona('', '', '', '', '', '');

  isAdmin: any;
  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    this.userAuthorithies();
    this.personaService.detail(2).subscribe((data) => {
      this.persona = data;
    });
  }

  userAuthorithies() {
    const authorithies: String[] = this.tokenService.getAuthorities();
    //Este console.log lo hice solamente para verificar la estructura del dato
    //que me retorna el metodo getAuthorities
    console.log('AUTHORITIES', authorithies);

    return (this.isAdmin = authorithies);
  }
}
