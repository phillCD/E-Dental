package com.example.E_Dental.users;

import com.example.E_Dental.enums.Gender;
import com.example.E_Dental.enums.Roles;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

public interface UsersRepresentation {
    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    class UserResponse {
        private String nome;
        private String username;
        private Roles cargo;
        private String email;
        private String celular;
        private String telefone;
        private String estado;
        private String endereco;
        private String bairro;
        private String cidade;
        private String cep;
        private String dataNascimento;
        private Gender gender;

        public static UserResponse from(Users user){
            return UserResponse.builder()
                    .nome(user.getNome())
                    .username(user.getUsername())
                    .cargo(user.getCargo())
                    .email(user.getEmail())
                    .celular(user.getCelular())
                    .telefone(user.getTelefone())
                    .estado(user.getEstado())
                    .endereco(user.getEndereco())
                    .bairro(user.getBairro())
                    .cidade(user.getCidade())
                    .cep(user.getCep())
                    .dataNascimento(user.getDataNascimento())
                    .gender(user.getGender())
                    .build();
        }
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    class UserCreate{
        private String nome;
        private String username;
        private String password;
        @NotNull
        @Enumerated(EnumType.STRING)
        private Roles cargo;
        private String email;
        private String celular;
        private String telefone;
        private String estado;
        private String endereco;
        private String bairro;
        private String cidade;
        private String cep;
        private String dataNascimento;
        private Gender genero;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    class UserUpdate{
        private String nome;
        private String username;
        private String password;
        @NotNull
        @Enumerated(EnumType.STRING)
        private Roles cargo;
        private String email;
        private String celular;
        private String telefone;
        private String estado;
        private String endereco;
        private String bairro;
        private String cidade;
        private String cep;
        private String dataNascimento;
        private Gender genero;
    }
}
