import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor() { }
  
  buscarUsuarioPorEmail(email: String) {
    throw new Error('Method not implemented.');
  }
  
}
