package com.nour.nour.virement_cacp;

import com.nour.nour.accounts.AccountEntity;
import com.nour.nour.accounts.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/cacp")
@CrossOrigin(origins = "http://localhost:63342")
public class CacpController {
    @Autowired
    CacpRepository cacpRepository;
    @Autowired
    AccountRepository accountRepository;

    @GetMapping("/get-all-cacp")
    public List<CacpEntity> getAllCac(){
        return cacpRepository.findAll();
    }

    @PostMapping("/create-cacp/{accountId}/{accountId2}")
    public ResponseEntity<String> createCac(
            @RequestBody CacpEntity cac,
            @PathVariable(value = "accountId") Integer accountId,
            @PathVariable(value = "accountId2") Integer accountId2) {
        Optional<AccountEntity> account = accountRepository.findById(accountId);
        Optional<AccountEntity> account2 = accountRepository.findById(accountId2);

        if (account.isPresent() && account2.isPresent() && cac != null) {
            AccountEntity accountDebit = account.get();
            AccountEntity creditedAccount = account2.get();

            cac.setAccountDebit(accountDebit);
            cac.setCreditedAccountNumber(creditedAccount);

            cac.getAccountDebit().setBalance(cac.getAccountDebit().getBalance() - cac.getTransferMoney());
            cac.getCreditedAccountNumber().setBalance(cac.getCreditedAccountNumber().getBalance() + cac.getTransferMoney());

            cacpRepository.save(cac);

            return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"Cac created\"}");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found");
        }
    }


    @DeleteMapping("/delete-cacp/{id}")
    public Map<String, Boolean> deleteCacp(@PathVariable(value = "id") Integer cacpId)
    {
        CacpEntity cacp = cacpRepository.findById(cacpId).get();

        cacpRepository.delete(cacp);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/get-cacp/{id}")
    public CacpEntity getCacpById(@PathVariable(value = "id") Integer cacpId)
    {
        return cacpRepository.findById(cacpId).get();
    }
    @PatchMapping("update-Cacp/{cacpId}")
    public ResponseEntity<String> patchCacp(
            @PathVariable Integer cacpId,
            @RequestBody CacpEntity updatedCacp) {

        Optional<CacpEntity> cacpOptional = cacpRepository.findById(cacpId);

        if (cacpOptional.isPresent()) {
            CacpEntity existingCacp = cacpOptional.get();

            existingCacp.setAccountDebit(updatedCacp.getAccountDebit());
            existingCacp.setDevise(updatedCacp.getDevise());
            existingCacp.setCreditedAccountNumber(updatedCacp.getCreditedAccountNumber());
            existingCacp.setTransferMoney(updatedCacp.getTransferMoney());
            existingCacp.setReason(updatedCacp.getReason());
            existingCacp.setFrequency(updatedCacp.getFrequency());
            existingCacp.setDatepremierVirement(updatedCacp.getDatepremierVirement());
            existingCacp.setDatedernierVirement(updatedCacp.getDatedernierVirement());

            cacpRepository.save(existingCacp);
            return ResponseEntity.ok("Cacp updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   /* @PostMapping("/create-cac/{accountId}/{accountId2}")
    public ResponseEntity<String> createCacp(
            @RequestBody CacpEntity cacp,
            @PathVariable(value = "accountId") Integer accountId,
            @PathVariable(value = "accountId2") Integer accountId2,
            @RequestParam(value = "startDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate startDate,
            @RequestParam(value = "endDate") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate endDate) {

        Optional<AccountEntity> account = accountRepository.findById(accountId);
        Optional<AccountEntity> account2 = accountRepository.findById(accountId2);

        if (account.isPresent() && account2.isPresent() && cacp != null) {
            AccountEntity accountDebit = account.get();
            AccountEntity creditedAccount = account2.get();

            cacp.setAccountDebit(accountDebit);
            cacp.setCreditedAccountNumber(creditedAccount);
            cacp.setDatepremierVirement(startDate);
            cacp.setDatedernierVirement(endDate);

            LocalDate currentDate = startDate;
            while (!currentDate.isAfter(endDate)) {
                cacp.getAccountDebit().setBalance(cacp.getAccountDebit().getBalance() - cacp.getTransferMoney());
                cacp.getCreditedAccountNumber().setBalance(cacp.getCreditedAccountNumber().getBalance() + cacp.getTransferMoney());

                cacpRepository.save(cacp); // Save the transaction

                // Move to the next month
                currentDate = currentDate.plusMonths(1);
            }

            return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"Cac created\"}");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found");
        }
    }
*/

}
