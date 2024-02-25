package com.nour.nour.virement_vb;


import com.nour.nour.virement_cac.CacEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VbRepository extends JpaRepository<VbEntity,Integer> {
    List<VbEntity> findByIsSignedFalse();

    List<VbEntity> findByIsSignedTrue();
}
