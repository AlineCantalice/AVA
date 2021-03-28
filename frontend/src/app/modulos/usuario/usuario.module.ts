import { UsuarioService } from './../../services/usuario/usuario.service';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioRoutingModule } from './usuario-routing.module';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListagemComponent } from './components/listagem/listagem.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FormularioComponent, ListagemComponent],
  providers: [UsuarioService],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class UsuarioModule { }
