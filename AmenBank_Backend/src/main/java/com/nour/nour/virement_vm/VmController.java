package com.nour.nour.virement_vm;

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
@RequestMapping("/vm")
@CrossOrigin(origins = "http://localhost:63342")
public class VmController {
    @Autowired
    VmRepository vmRepository;
    @Autowired
    AccountRepository accountRepository;

    @Autowired
    BeneficiaryRepository beneficiaryRepository;

    @GetMapping("/get-all-vm")
    public List<VmEntity> getAllVb(){
        return vmRepository.findAll();
    }

    @PostMapping("/create-vm/{accountId}/{beneficiaryId}")
    public ResponseEntity createVm(@RequestBody VmEntity vm, @PathVariable(value = "accountId") Integer accountId, @RequestParam(value = "beneficiaryIds") List<Integer> beneficiaryIds) {
        Optional<AccountEntity> account = accountRepository.findById(accountId);
        if (account.isPresent() && vm != null) {
            vm.setAccountDebit(account.get());
            for (Integer beneficiaryId : beneficiaryIds) {
                Optional<BeneficiaryEntity> beneficiaryOptional = beneficiaryRepository.findById(beneficiaryId);
                if (beneficiaryOptional.isPresent()) {
                    BeneficiaryEntity beneficiary = beneficiaryOptional.get();
                    vm.getAccountDebit().setBalance(vm.getAccountDebit().getBalance()-vm.getAmount());
                    vm.getBeneficiary().add(beneficiary);
                } else {
                    throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Beneficiary not found");
                }
            }
            vmRepository.save(vm);
            return ResponseEntity.status(HttpStatus.OK).body("{\"message\": \"vm created\"}");
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Account not found");
        }
    }


    @DeleteMapping("/delete-vm/{id}")
    public Map<String, Boolean> deleteVm(@PathVariable(value = "id") Integer vmId)
    {
        VmEntity vm = vmRepository.findById(vmId).get();

        vmRepository.delete(vm);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @GetMapping("/get-vm/{id}")
    public VmEntity getVmById(@PathVariable(value = "id") Integer vmId)
    {
        return vmRepository.findById(vmId).get();
    }

    @PatchMapping("update-Vm/{vmId}")
    public ResponseEntity<String> patchVm(
            @PathVariable Integer vmId,
            @RequestBody VmEntity updatedVm) {

        Optional<VmEntity> vmOptional = vmRepository.findById(vmId);

        if (vmOptional.isPresent()) {
            VmEntity existingVm = vmOptional.get();

            existingVm.setAccountDebit(updatedVm.getAccountDebit());
            existingVm.setBeneficiaryCount(updatedVm.getBeneficiaryCount());
            existingVm.setDate(updatedVm.getDate());
            existingVm.setAmount(updatedVm.getAmount());
            existingVm.setPaymentReason(updatedVm.getPaymentReason());
            existingVm.setBeneficiary(updatedVm.getBeneficiary());

            vmRepository.save(existingVm);
            return ResponseEntity.ok("Vm updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }


}
