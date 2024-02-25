package com.nour.nour.virement_vbp;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VbpRepository extends JpaRepository<VbpEntity,Integer> {
}
