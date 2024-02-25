package com.nour.nour.Beneficiarys;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BeneficiaryRepository extends JpaRepository<BeneficiaryEntity,Integer> {
    BeneficiaryEntity findByRib(String rib);
    BeneficiaryEntity findByLabel(String label);
}
