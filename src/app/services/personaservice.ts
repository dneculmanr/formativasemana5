import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface Persona {
  rut: string;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  correo: string;
  region: string;
  id?: number;
}


@Injectable({
  providedIn: 'root',
})
export class Personaservice {

  private apiUrl = 'http://127.0.0.1:8000/personas';

  constructor(private http: HttpClient) { }

  crearPersona(persona: Persona): Observable<Persona>{
    return this.http.post<Persona>(this.apiUrl, persona);
  }

  listarPersonas(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.apiUrl)
  }

}
