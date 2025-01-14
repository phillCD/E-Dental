package com.example.E_Dental.users;

import com.example.E_Dental.core.CustomQuerydslPredicateExecutor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsersRepository extends JpaRepository<Users, Long>, CustomQuerydslPredicateExecutor<Users> {
}
