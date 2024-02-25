package com.nour.nour.virement_vbp;

import com.nour.nour.Beneficiarys.BeneficiaryEntity;
import com.nour.nour.accounts.AccountEntity;
import com.nour.nour.virement_cac.Devise;
import com.nour.nour.virement_cacp.Frequency;
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
@Table(name = "vbp")
public class VbpEntity {
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
    private Frequency frequency;
    private String datepremierVirement;
    private String datedernierVirement;
    private String reason;
    private String date;
    private Boolean isSigned=Boolean.FALSE;
}
