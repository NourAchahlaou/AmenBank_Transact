package com.nour.nour.Users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;



@RestController
@RequestMapping("/api")

@CrossOrigin(origins = "http://localhost:63342")
public class UserController {

    @Autowired
    UserRepository userRepository;
    @GetMapping("/get-all-User")
    public List<UserEntity> getAllUser(){
        return userRepository.findAll();
    }

    @PostMapping("/create-User")
    public UserEntity createUser(@RequestBody UserEntity account){
        return userRepository.save(account);
    }

    @DeleteMapping("/delete-User/{id}")
    public Map<String, Boolean> deleteUser(@PathVariable(value = "id") Integer userid)
    {
        UserEntity user = userRepository.findById(userid).get();

        userRepository.delete(user);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @PostMapping("/login")
    public ResponseEntity<UserEntity> login(@RequestBody UserEntity loginRequest) {
        String email = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        UserEntity user = userRepository.findByEmailAndPassword(email, password);

        if (user != null) {
            // User authentication successful
            return ResponseEntity.ok(user); // Include the user entity in the response
        } else {
            // User authentication failed
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

}
