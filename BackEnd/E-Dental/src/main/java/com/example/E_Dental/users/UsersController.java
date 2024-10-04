package com.example.E_Dental.users;

import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("users")
@AllArgsConstructor
public class UsersController {
    private UsersService service;

    @GetMapping
    public ResponseEntity<List<UsersRepresentation.UserResponse>> getAllUsers() {
        return ResponseEntity.ok(service.getAllUsers().stream().map(UsersRepresentation.UserResponse::from).collect(Collectors.toList()));
    }

    @GetMapping("{id}")
    public ResponseEntity<UsersRepresentation.UserResponse> getUserById(@PathVariable Long id) {
        return ResponseEntity.ok(UsersRepresentation.UserResponse.from(service.getUserById(id)));
    }

    @PostMapping
    public ResponseEntity<UsersRepresentation.UserResponse> createUser(@RequestBody UsersRepresentation.UserCreate create) {
        return ResponseEntity.ok(UsersRepresentation.UserResponse.from(service.createUser(create)));
    }

    @PostMapping("{id}")
    public ResponseEntity<UsersRepresentation.UserResponse> updateUser(@PathVariable Long id,@RequestBody UsersRepresentation.UserUpdate entity) {
        return ResponseEntity.ok(UsersRepresentation.UserResponse.from(service.updateUser(id, entity)));
    }

    @DeleteMapping("{id}")
    public ResponseEntity<UsersRepresentation.UserResponse> deleteUser(@PathVariable Long id) {
        return ResponseEntity.ok(UsersRepresentation.UserResponse.from(service.deleteUser(id)));
    }
}
