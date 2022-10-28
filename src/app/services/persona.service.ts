import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  //llamada al backend
  // URL = 'http://localhost:8080/personas/';
  URL = 'https://portfolio-belen-romero.herokuapp.com/personas/';

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<Persona> {
    //get/perfil esta directo desde nerbeans que busque id: 2 que es Ana Belen Romero
    return this.http.get<Persona>(this.URL + 'get/perfil');
  }
}
