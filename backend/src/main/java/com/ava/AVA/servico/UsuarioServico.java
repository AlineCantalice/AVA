package com.ava.AVA.servico;

import com.ava.AVA.repositorio.UsuarioRepositorio;
import com.ava.AVA.servico.dto.UsuarioDTO;
import com.ava.AVA.servico.mapper.UsuarioMapper;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor
public class UsuarioServico {

    private final UsuarioRepositorio usuarioRepositorio;
    private final UsuarioMapper usuarioMapper;

    public List<UsuarioDTO> listarUsuario(){
        return usuarioMapper.toDto(usuarioRepositorio.findAll());
    }

}
