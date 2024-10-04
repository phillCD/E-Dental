package com.example.E_Dental.users;

import com.example.E_Dental.core.EntityId;
import com.example.E_Dental.enums.Gender;
import com.example.E_Dental.enums.Roles;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Users extends EntityId {
    @Column
    private String nome;
    @Column
    private String username;
    @Column
    private String password;
    @Column
    private Roles cargo;
    @Column
    private String email;
    @Column
    private String celular;
    @Column
    private String telefone;
    @Column
    private String estado;
    @Column
    private String endereco;
    @Column
    private String bairro;
    @Column
    private String cidade;
    @Column
    private String cep;
    @Column(name = "data_nascimento")
    private String dataNascimento;
    @Column
    private Gender gender;
}
