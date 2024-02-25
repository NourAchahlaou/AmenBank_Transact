package com.nour.nour.virement_cac;


import com.nour.nour.accounts.AccountEntity;
import com.nour.nour.accounts.AccountRepository;
import com.nour.nour.virement_vb.VbEntity;
import com.nour.nour.virement_vb.VbRepository;
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
@RequestMapping("/cac")
@CrossOrigin(origins = "http://localhost:63342")
public class CacController {
    @Autowired
    CacRepository cacRepository;
    @Autowired
    AccountRepository accountRepository;
    @Autowired
    private VbRepository vbRepository; // Assuming you have a repository for VbEntity

    @GetMapping("/total-transferred-money")
    public ResponseEntity<Map<String, Float>> getTotalTransferredMoney() {
        List<CacEntity> cacEntities = cacRepository.findAll();
        List<VbEntity> vbEntities = vbRepository.findAll();

        // Calculate the total transferred money for cac
        float totalCacTransferredMoney = cacEntities.stream()
                .map(CacEntity::getTransferMoney)
                .reduce(0F, Float::sum);

        // Calculate the total transferred money for vb
        float totalVbTransferredMoney = vbEntities.stream()
                .map(VbEntity::getTransferMoney)
                .reduce(0F, Float::sum);

        // Create a map to store the totals for each type
        Map<String, Float> totalTransferredMoney = new HashMap<>();
        totalTransferredMoney.put("virement compte à compte", totalCacTransferredMoney);
        totalTransferredMoney.put("virement vers bénéficiaires", totalVbTransferredMoney);

        return ResponseEntity.ok(totalTransferredMoney);
    }


    @GetMapping("/get-all-cac")
    public List<CacEntity> getAllCac(){
        return cacRepository.findAll();
    }
    @GetMapping("/get-unsigned-cac-transactions")
    public List<CacEntity> getUnsignedCACTransactions() {
        return cacRepository.findByIsSignedFalse();
    }
    @GetMapping("/get-signed-cac-transactions")
    public List<CacEntity> getsignedCACTransactions() {
        return cacRepository.findByIsSignedTrue();
    }



//    @PostMapping("/create-cac/{accountId}/{accountId2}")
//    public ResponseEntity<String> createCac(
//            @RequestBody CacEntity cac,
//            @PathVariable(value = "accountId") Integer accountId,
//            @PathVariable(value = "accountId2") Integer accountId2
//    ) {
//        try {
//            // Retrieve account entities based on their IDs
//            Optional<AccountEntity> account = accountRepository.findById(accountId);
//            Optional<AccountEntity> account2 = accountRepository.findById(accountId2);
//
//            if (account.isPresent() && account2.isPresent() && cac != null) {
//                cac.setAccountDebit(account.get());
//                cac.setCreditedAccountNumber(account2.get());
//
//                // Perform the transfer operation here
//                float transferAmount = cac.getTransferMoney();
//
//                // Update balances for both accounts
//                AccountEntity accountDebit = cac.getAccountDebit();
//                AccountEntity creditedAccount = cac.getCreditedAccountNumber();
//
//                if (accountDebit.getBalance() >= transferAmount) {
//                    accountDebit.setBalance(accountDebit.getBalance() - transferAmount);
//                    creditedAccount.setBalance(creditedAccount.getBalance() + transferAmount);
//
//                    cacRepository.save(cac);
//                    accountRepository.save(accountDebit);
//                    accountRepository.save(creditedAccount);
//
//                    return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"Cac created\"}");
//                } else {
//                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("{\"error\": \"Insufficient funds\"}");
//                }
//            } else {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Account not found\"}");
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"An error occurred\"}");
//        }
//    }
//    @PostMapping("/sign-cac/{cacId}")
//    public ResponseEntity<String> signCACTransaction(@PathVariable Integer cacId) {
//        try {
//            // Find the CAC transaction by ID
//            CacEntity cacEntity = cacRepository.findById(cacId).orElse(null);
//
//            if (cacEntity != null) {
//                // Mark the CAC transaction as signed
//                cacEntity.setIsSigned(Boolean.TRUE);
//                cacRepository.save(cacEntity);
//                return ResponseEntity.ok("CAC transaction signed successfully.");
//            } else {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("CAC transaction not found.");
//            }
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error signing CAC transaction.");
//        }
//    }

    @PostMapping("/create-cac/{accountId}/{accountId2}")
    public ResponseEntity<String> createCac(
            @RequestBody CacEntity cac,
            @PathVariable(value = "accountId") Integer accountId,
            @PathVariable(value = "accountId2") Integer accountId2
    ) {
        try {
            // Retrieve account entities based on their IDs
            Optional<AccountEntity> account = accountRepository.findById(accountId);
            Optional<AccountEntity> account2 = accountRepository.findById(accountId2);

            if (account.isPresent() && account2.isPresent() && cac != null) {
                cac.setAccountDebit(account.get());
                cac.setCreditedAccountNumber(account2.get());

                // Save the CAC transaction without transferring money
                cacRepository.save(cac);
                return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"CAC created\"}");
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("{\"error\": \"Account not found\"}");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("{\"error\": \"An error occurred\"}");
        }
    }

    @PostMapping("/sign-cac/{cacId}")
    public ResponseEntity<String> signCACTransaction(@PathVariable Integer cacId) {
        try {
            // Find the CAC transaction by ID
            CacEntity cacEntity = cacRepository.findById(cacId).orElse(null);

            if (cacEntity != null) {
                // Mark the CAC transaction as signed
                cacEntity.setIsSigned(Boolean.TRUE);
                cacRepository.save(cacEntity);

                // Perform the money transfer and update balances here
                float transferAmount = cacEntity.getTransferMoney();
                AccountEntity accountDebit = cacEntity.getAccountDebit();
                AccountEntity creditedAccount = cacEntity.getCreditedAccountNumber();

                if (accountDebit.getBalance() >= transferAmount) {
                    accountDebit.setBalance(accountDebit.getBalance() - transferAmount);
                    creditedAccount.setBalance(creditedAccount.getBalance() + transferAmount);

                    accountRepository.save(accountDebit);
                    accountRepository.save(creditedAccount);

                    return ResponseEntity.ok("CAC transaction signed and money transferred successfully.");
                } else {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Insufficient funds");
                }
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("CAC transaction not found.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error signing CAC transaction.");
        }
    }


    @DeleteMapping("/delete-cac/{id}")
    public Map<String, Boolean> deleteCac(@PathVariable(value = "id") Integer cacId)
    {
        CacEntity cac = cacRepository.findById(cacId).get();

        cacRepository.delete(cac);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/get-cac/{id}")
    public CacEntity getCacById(@PathVariable(value = "id") Integer cacId)
    {
        return cacRepository.findById(cacId).get();
    }
    @PatchMapping("update-Cac/{cacId}")
    public ResponseEntity<String> patchCac(
            @PathVariable Integer cacId,
            @RequestBody CacEntity updatedCac) {

        Optional<CacEntity> cacOptional = cacRepository.findById(cacId);

        if (cacOptional.isPresent()) {
            CacEntity existingCac = cacOptional.get();

            existingCac.setAccountDebit(updatedCac.getAccountDebit());
            existingCac.setDevise(updatedCac.getDevise());
            existingCac.setCreditedAccountNumber(updatedCac.getCreditedAccountNumber());
            existingCac.setTransferMoney(updatedCac.getTransferMoney());
            existingCac.setReason(updatedCac.getReason());
            existingCac.setDate(updatedCac.getDate());


            cacRepository.save(existingCac);
            return ResponseEntity.ok("CacEntity updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
