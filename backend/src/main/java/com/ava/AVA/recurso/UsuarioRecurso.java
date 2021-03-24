package com.ava.AVA.recurso;

import com.ava.AVA.domain.Usuario;
import com.ava.AVA.servico.UsuarioServico;
import com.ava.AVA.servico.dto.UsuarioDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/api/usuarios")
@RestController
@RequiredArgsConstructor
public class UsuarioRecurso {

    private final UsuarioServico usuarioServico;

    @GetMapping
    public ResponseEntity<List<UsuarioDTO>> listarUsuario(){
        return ResponseEntity.ok(usuarioServico.listarUsuario());
    }

}
