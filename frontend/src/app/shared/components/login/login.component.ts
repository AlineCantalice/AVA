import { UsuarioService } from './../../../services/usuario/usuario.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Usuario } from 'src/app/dominios/usuario';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  display: boolean = false;
  emailInput: string;
  senhaInput: string;
  formulario: FormGroup;
  @Output() emitUsuario = new EventEmitter<Usuario>();

  constructor(
    private fb: FormBuilder,
    private service: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.pegarUsuarioLocalStorage();
    this.formulario = this.fb.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

  login(emailInput: string){
    this.service.buscarUsuarioPorEmail(this.emailInput)
      .subscribe((usuario: Usuario) =>{
        this.emitUsuario.emit(usuario);
        localStorage.setItem("usuario", JSON.stringify(usuario));
      });
  }

  pegarUsuarioLocalStorage() {
    const usuario = JSON.parse(window.localStorage.getItem("usuario"));
    this.emitUsuario.emit(usuario);
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
