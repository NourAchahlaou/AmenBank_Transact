package com.nour.nour.virement_cacp;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CacpRepository extends JpaRepository<CacpEntity,Integer> {
}
