import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/dominios/usuario';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = environment.apiUrl

  constructor(
    private http: HttpClient
  ) { }

  buscarUsuarioPorEmail(email: string): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/usuarios/email/${email}`);
  }

  buscarUsuarioPorId(id: number): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/usuarios/${id}`);
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>(`${this.url}/usuarios`);
  }

  salvarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}/usuarios`, usuario);
  }

  editarUsuario(usuario: Usuario): Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/usuarios`, usuario);
  }

  deletarUsuario(id: number): Observable<Usuario>{
    return this.http.delete<Usuario>(`${this.url}/usuarios/${id}`);
  }

}
