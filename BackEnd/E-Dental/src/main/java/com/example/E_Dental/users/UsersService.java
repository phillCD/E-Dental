package com.example.E_Dental.users;

import com.example.E_Dental.enums.Roles;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersService {
    @Autowired
    private ModelMapper modelMapper;
    @Autowired
    private UsersRepository usersRepository;

    public List<Users> getAllUsers() {
        return usersRepository.findAll();
    }

    public Users getUserById(Long id) {
        return usersRepository.findById(id).orElse(null);
    }

    public Users createUser(UsersRepresentation.UserCreate create) {
        return usersRepository.save(new Users(
                create.getNome(),
                create.getUsername(),
                create.getPassword(),
                create.getCargo(),
                create.getEmail(),
                create.getCelular(),
                create.getTelefone(),
                create.getEstado(),
                create.getEndereco(),
                create.getBairro(),
                create.getCidade(),
                create.getCep(),
                create.getDataNascimento(),
                create.getGenero()
        ));
    }

    public Users updateUser(Long id, UsersRepresentation.UserUpdate entity){
        var dbEntity = usersRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        modelMapper.map(entity, dbEntity);

        return usersRepository.save(dbEntity);
    }

    public Users deleteUser(Long id){
        var dbEntity = usersRepository.findById(id).orElseThrow(() -> new RuntimeException("User not found"));
        usersRepository.delete(dbEntity);
        return dbEntity;
    }
}
