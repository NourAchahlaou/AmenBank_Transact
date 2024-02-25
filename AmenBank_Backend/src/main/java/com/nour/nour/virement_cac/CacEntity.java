package com.nour.nour.virement_cac;

import com.nour.nour.accounts.AccountEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cac")
public class CacEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cacId;
    @ManyToOne
    @JoinColumn(name= "account_id")
    private AccountEntity accountDebit;
    private Devise devise;
    @ManyToOne
    @JoinColumn(name = "credited_account_id")
    private AccountEntity creditedAccountNumber;
    private Float transferMoney;
    private String reason;
    private String date;
    private Boolean isSigned=Boolean.FALSE;
}
