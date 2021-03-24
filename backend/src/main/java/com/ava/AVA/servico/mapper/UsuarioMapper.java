package com.ava.AVA.servico.mapper;

import com.ava.AVA.domain.Usuario;
import com.ava.AVA.servico.dto.UsuarioDTO;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface UsuarioMapper extends EntityMapper<UsuarioDTO, Usuario> {
}
