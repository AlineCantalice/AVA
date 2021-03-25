import { UsuarioService } from './../../modulos/usuario/sevices/usuario.service';
import { Usuario } from './../../dominios/usuario';
import { Component, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display: boolean = false;
  formLoginUsuario!: FormGroup;
  chaveInput!: string;
  usuario = new Usuario();

  constructor(
    private fb: FormBuilder,
    public usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.formLoginUsuario = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(email: String, senha: String){
    this.router.navigate(['/usuarios'])
    this.usuario.email = email
    this.usuario.senha = senha
    this.usuarioService.buscarUsuarioPorEmail(this.usuario.email)
  }

  mostrarDialog() {
    this.display = true;
  }

  fecharDialog() {
    this.display = false;
  }

  logout() {
    localStorage.clear();
    location.reload();
  }
}
