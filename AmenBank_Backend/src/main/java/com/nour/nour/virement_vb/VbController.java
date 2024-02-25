package com.nour.nour.virement_vb;

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
@RequestMapping("/vb")
@CrossOrigin(origins = "http://localhost:63342")
public class VbController {
    @Autowired
    VbRepository vbRepository;
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    BeneficiaryRepository beneficiaryRepository;

    @GetMapping("/get-all-vb")
    public List<VbEntity> getAllVb(){
        return vbRepository.findAll();
    }
    @GetMapping("/get-unsigned-vb-transactions")
    public List<VbEntity> getUnsignedVbTransactions() {
        return vbRepository.findByIsSignedFalse();
    }
//    @GetMapping("/total-transferred-money")
//    public ResponseEntity<Float> getTotalTransferredMoney() {
//        List<VbEntity> cacEntities = vbRepository.findAll();
//
//        // Calculate the total transferred money by summing up transferMoney values
//        float totalTransferredMoney = cacEntities.stream()
//                .map(VbEntity::getTransferMoney)
//                .reduce(0F, Float::sum);
//
//        return ResponseEntity.ok(totalTransferredMoney);
//    }
    @GetMapping("/get-signed-vb-transactions")
    public List<VbEntity> getsignedvbTransactions() {
        return vbRepository.findByIsSignedTrue();
    }
    @PostMapping("/sign-vb/{vbId}")
    public ResponseEntity<String> signVBTransaction(@PathVariable Integer vbId) {
        try {
            // Find the VB transaction by ID
            VbEntity vbEntity = vbRepository.findById(vbId).orElse(null);

            if (vbEntity != null) {
                // Mark the VB transaction as signed
                vbEntity.setIsSigned(Boolean.TRUE);

                // Perform the money transfer and update balances here
                float transferAmount = vbEntity.getTransferMoney();
                AccountEntity accountDebit = vbEntity.getAccountDebit();
                BeneficiaryEntity beneficiary = vbEntity.getBeneficiary();

                if (accountDebit.getBalance() >= transferAmount) {
                    accountDebit.setBalance(accountDebit.getBalance() - transferAmount);
                    beneficiary.setBalance(beneficiary.getBalance() + transferAmount);

                    vbRepository.save(vbEntity);
                    accountRepository.save(accountDebit);
                    beneficiaryRepository.save(beneficiary);

                    return ResponseEntity.ok("VB transaction signed and money transferred successfully.");
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient funds");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("VB transaction not found.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error signing VB transaction.");
        }
    }

    @PostMapping("/create-vb/{accountId}/{beneficiaryId}")
    public ResponseEntity createVb(
            @RequestBody VbEntity vb,
            @PathVariable(value = "accountId") Integer accountId,
            @PathVariable(value = "beneficiaryId") Integer beneficiaryId
    ) {
        try {
            Optional<AccountEntity> account = accountRepository.findById(accountId);
            Optional<BeneficiaryEntity> beneficiary = beneficiaryRepository.findById(beneficiaryId);

            if (account.isPresent() && beneficiary.isPresent() && vb != null) {
                vb.setAccountDebit(account.get());
                vb.setBeneficiary(beneficiary.get());

                // Save the VB transaction without transferring money
                vbRepository.save(vb);
                return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"VB created\"}");
            } else {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Account or beneficiary not found");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"An error occurred\"}");
        }
    }


    @DeleteMapping("/delete-vb/{id}")
    public Map<String, Boolean> deleteVb(@PathVariable(value = "id") Integer vbId)
    {
        VbEntity vb = vbRepository.findById(vbId).get();

        vbRepository.delete(vb);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/get-vb/{id}")
    public VbEntity getVbById(@PathVariable(value = "id") Integer vbId)
    {
        return vbRepository.findById(vbId).get();
    }
    @PatchMapping("update-Vb/{vbId}")
    public ResponseEntity<String> patchVb(
            @PathVariable Integer vbId,
            @RequestBody VbEntity updatedVb) {

        Optional<VbEntity> vbOptional = vbRepository.findById(vbId);

        if (vbOptional.isPresent()) {
            VbEntity existingVb = vbOptional.get();

            existingVb.setAccountDebit(updatedVb.getAccountDebit());
            existingVb.setBeneficiary(updatedVb.getBeneficiary());
            existingVb.setDeviseVB(updatedVb.getDeviseVB());
            existingVb.setTransferMoney(updatedVb.getTransferMoney());
            existingVb.setReason(updatedVb.getReason());
            existingVb.setDate(updatedVb.getDate());

            vbRepository.save(existingVb);
            return ResponseEntity.ok("Vb updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }



}
