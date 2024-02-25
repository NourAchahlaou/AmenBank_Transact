package com.nour.nour.virement_vb;

import com.nour.nour.Beneficiarys.BeneficiaryEntity;
import com.nour.nour.accounts.AccountEntity;
import com.nour.nour.virement_cac.Devise;
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
@Table(name = "vb")
public class VbEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vbId;
    @ManyToOne
    @JoinColumn(name= "account_id")
    private AccountEntity accountDebit;
    @ManyToOne
    @JoinColumn(name= "beneficiary_id")
    private BeneficiaryEntity beneficiary;
    private Devise deviseVB;
    private Float transferMoney;
    private String reason;
    private String date;
    private Boolean isSigned=Boolean.FALSE;
}
