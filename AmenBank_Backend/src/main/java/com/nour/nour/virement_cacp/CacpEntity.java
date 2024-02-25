package com.nour.nour.virement_cacp;

import com.nour.nour.accounts.AccountEntity;
import com.nour.nour.virement_cac.Devise;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "cacp")
public class CacpEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cacpId;
    @ManyToOne
    @JoinColumn(name= "account_id")
    private AccountEntity accountDebit;
    private Devise devise;
    @ManyToOne
    @JoinColumn(name= "creditedaccount_id")
    private AccountEntity creditedAccountNumber;
    private Float transferMoney;
    private String reason;
    private Frequency frequency;
    private String datepremierVirement;
    private String datedernierVirement;
    private Boolean isSigned=Boolean.FALSE;
}
