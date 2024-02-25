package com.nour.nour.Users;

import com.nour.nour.Beneficiarys.BeneficiaryEntity;
import com.nour.nour.accounts.AccountEntity;

import java.util.ArrayList;
import java.util.List;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user_amenbank")
public class UserEntity {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Integer userid;
        private String username;
        private String password;
        private String email;
        private String role;
        @ManyToMany
        @JoinColumn(name = "account_id")
        private  List<AccountEntity> myList= new ArrayList<>();
    }


