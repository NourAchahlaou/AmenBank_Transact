package com.nour.nour.Beneficiarys;

import org.springframework.http.ResponseEntity;
import com.nour.nour.accounts.BalanceUpdateRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("/beneficiary")
@CrossOrigin(origins ="http://localhost:63342")
public class BeneficiaryController {
    @Autowired
    BeneficiaryRepository beneficiaryRepository;

    @GetMapping("/get-all-beneficiaries")
    public List<BeneficiaryEntity> getAllBeneficiary(){
        return beneficiaryRepository.findAll();
    }
    @GetMapping("/get-by-label/{beneficiaryLabel}")
    public Integer getBeneficiaryByLabel(@PathVariable(value = "beneficiaryLabel") String beneficiaryLabel) {
        BeneficiaryEntity benef= beneficiaryRepository.findByLabel(beneficiaryLabel);
        if (benef != null) {
            return benef.getBeneficiaryId();
        } else {
            return null;
        }
    }
    @PostMapping("/create-Beneficiary")
    public BeneficiaryEntity createBeneficiary(@RequestBody BeneficiaryEntity inputBeneficiary) {
        // Create a new BeneficiaryEntity instance and copy properties from the inputBeneficiary
        BeneficiaryEntity beneficiary = new BeneficiaryEntity();
        beneficiary.setName(inputBeneficiary.getName());
        beneficiary.setRib(inputBeneficiary.getRib());
        beneficiary.setLabel(inputBeneficiary.getLabel());
        beneficiary.setTelephone(inputBeneficiary.getTelephone());
        beneficiary.setEmail(inputBeneficiary.getEmail());

        // Set the balance here (you can set an initial value)
        beneficiary.setBalance(0.0f); // You can set any initial value here
        beneficiary.setBanque(null);
        // Save the beneficiary and return the saved instance
        return beneficiaryRepository.save(beneficiary);
    }

    @DeleteMapping("/delete-Beneficiary/{id}")
    public Map<String, Boolean> deleteBeneficiary(@PathVariable(value = "id") Integer beneficiaryId) {
        Optional<BeneficiaryEntity> beneficiaryOptional = beneficiaryRepository.findById(beneficiaryId);

        if (beneficiaryOptional.isPresent()) {
            BeneficiaryEntity beneficiary = beneficiaryOptional.get();
            beneficiaryRepository.delete(beneficiary);

            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.TRUE);
            return response;
        } else {
            Map<String, Boolean> response = new HashMap<>();
            response.put("deleted", Boolean.FALSE);
            return response;
        }
    }
    @GetMapping("/get-Beneficiary/{id}")
    public BeneficiaryEntity getBeneficiaryById(@PathVariable(value = "id") Integer beneficiaryId)
    {
        return beneficiaryRepository.findById(beneficiaryId).get();
    }
    @PatchMapping("/update-Beneficiary-balance/{beneficiaryId}")
    public BeneficiaryEntity updateBalance(
            @PathVariable Integer beneficiaryId,
            @RequestBody BalanceUpdateRequest balanceUpdateRequest) {

        BeneficiaryEntity beneficiary = beneficiaryRepository.findById(beneficiaryId).orElse(null);
        beneficiary.setBalance(balanceUpdateRequest.getBalance());
        return beneficiaryRepository.save(beneficiary);
    }
    @GetMapping("/get-account/{id}")
    public BeneficiaryEntity getAccountById(@PathVariable(value = "id") Integer beneficiaryId)
    {
        return beneficiaryRepository.findById(beneficiaryId).get();
    }

    @GetMapping("/find-by-RIB/{input}")
    public BeneficiaryEntity findByRib(@PathVariable String input) {
        return beneficiaryRepository.findByRib(input);

    }
    @PatchMapping("update-Beneficiary/{beneficiaryId}")
    public ResponseEntity<String> patchBeneficiary(
            @PathVariable Integer beneficiaryId,
            @RequestBody BeneficiaryEntity updatedBeneficiary) {

        Optional<BeneficiaryEntity> beneficiaryOptional = beneficiaryRepository.findById(beneficiaryId);

        if (beneficiaryOptional.isPresent()) {
            BeneficiaryEntity existingBeneficiary = beneficiaryOptional.get();


            existingBeneficiary.setName(updatedBeneficiary.getName());
            existingBeneficiary.setRib(updatedBeneficiary.getRib());
            existingBeneficiary.setBanque(updatedBeneficiary.getBanque());
            existingBeneficiary.setLabel(updatedBeneficiary.getLabel());
            existingBeneficiary.setTelephone(updatedBeneficiary.getTelephone());
            existingBeneficiary.setEmail(updatedBeneficiary.getEmail());



            beneficiaryRepository.save(existingBeneficiary);
            return ResponseEntity.ok("Beneficiary updated successfully");
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
