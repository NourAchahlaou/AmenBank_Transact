package com.nour.nour.Users;

import com.nour.nour.virement_cac.CacEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity,Integer> {
    UserEntity findByEmailAndPassword(String email, String password);
}
