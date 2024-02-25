package com.nour.nour.virement_vbp;

import com.nour.nour.Beneficiarys.BeneficiaryEntity;
import com.nour.nour.Beneficiarys.BeneficiaryRepository;
import com.nour.nour.accounts.AccountEntity;
import com.nour.nour.accounts.AccountRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/vbp")
@CrossOrigin(origins = "http://localhost:63342")
public class VbpController {
    @Autowired
    VbpRepository vbpRepository;
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    BeneficiaryRepository beneficiaryRepostory;

    @GetMapping("/get-all-vbp")
    public List<VbpEntity> getAllVbp(){
        return vbpRepository.findAll();
    }

    @PostMapping("/create-vb/{accountId}/{beneficiaryId}")
    public ResponseEntity createVbp(@RequestBody VbpEntity vbp, @PathVariable(value = "accountId") Integer accountId, @PathVariable(value = "beneficiaryId") Integer  beneficiaryId) {
        Optional<AccountEntity> account = accountRepository.findById(accountId);
        Optional<BeneficiaryEntity> beneficiary = beneficiaryRepostory.findById(beneficiaryId);
        if (account.isPresent() && beneficiary.isPresent() && vbp != null) {
            vbp.setAccountDebit(account.get());
            vbp.setBeneficiary(beneficiary.get());
            vbpRepository.save(vbp);
            return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"vbp created\"}");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found");
        }
    }

    @DeleteMapping("/delete-vbp/{id}")
    public Map<String, Boolean> deleteVbp(@PathVariable(value = "id") Integer vbpId)
    {
        VbpEntity vbp = vbpRepository.findById(vbpId).get();

        vbpRepository.delete(vbp);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/get-vbp/{id}")
    public VbpEntity getVbpById(@PathVariable(value = "id") Integer vbId)
    {
        return vbpRepository.findById(vbId).get();
    }

    @PatchMapping("update-Vbp/{vbId}")
    public ResponseEntity<String> patchVbp(
            @PathVariable Integer vbId,
            @RequestBody VbpEntity updatedVbp) {

        Optional<VbpEntity> vbpOptional = vbpRepository.findById(vbId);

        if (vbpOptional.isPresent()) {
            VbpEntity existingVbp = vbpOptional.get();

            existingVbp.setAccountDebit(updatedVbp.getAccountDebit());
            existingVbp.setBeneficiary(updatedVbp.getBeneficiary());
            existingVbp.setDeviseVB(updatedVbp.getDeviseVB());
            existingVbp.setTransferMoney(updatedVbp.getTransferMoney());
            existingVbp.setFrequency(updatedVbp.getFrequency());
            existingVbp.setDatepremierVirement(updatedVbp.getDatepremierVirement());
            existingVbp.setDatedernierVirement(updatedVbp.getDatedernierVirement());
            existingVbp.setReason(updatedVbp.getReason());
            existingVbp.setDate(updatedVbp.getDate());

            vbpRepository.save(existingVbp);
            return ResponseEntity.ok("Vbp updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}



