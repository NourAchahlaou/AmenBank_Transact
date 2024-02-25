package com.nour.nour.virement_vm;


import com.nour.nour.Beneficiarys.BeneficiaryEntity;
import com.nour.nour.accounts.AccountEntity;
import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "vm")
public class VmEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer vmId;
    @ManyToOne
    @JoinColumn(name= "account_id")
    private AccountEntity accountDebit;
    private Integer beneficiaryCount;
    private String date;
    private Float amount;
    private String paymentReason;
    @ManyToMany
    @JoinColumn(name= "beneficiary_id")
    private List<BeneficiaryEntity> beneficiary= new ArrayList<>();
    private Boolean isSigned=Boolean.FALSE;
}
