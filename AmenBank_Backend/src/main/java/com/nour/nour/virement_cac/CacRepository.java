package com.nour.nour.virement_cac;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CacRepository extends JpaRepository<CacEntity,Integer> {
    List<CacEntity> findByIsSignedFalse();

    List<CacEntity> findByIsSignedTrue();
}
