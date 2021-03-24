package com.ava.AVA.domain;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "usuario")
@Getter
@Setter
public class Usuario implements Serializable {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sq_usuario")
    @SequenceGenerator(name = "sq_usuario", sequenceName = "sq_usuario", allocationSize = 1)
    private Integer id;

    @Column(name = "email")
    private String email;

    @Column(name = "senha")
    private String senha;

}
