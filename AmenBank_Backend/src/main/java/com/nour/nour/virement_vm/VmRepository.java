package com.nour.nour.virement_vm;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VmRepository extends JpaRepository<VmEntity,Integer> {
}
