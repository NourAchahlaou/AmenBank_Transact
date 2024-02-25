package com.nour.nour.accounts;


import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/account")
@CrossOrigin(origins = "http://localhost:63342")
public class AccountsController {

    @Autowired
    AccountRepository accountRepository;

    @GetMapping("/get-all-accounts")
    public List<AccountEntity> getAllAccounts(){
        return accountRepository.findAll();
    }

    @PostMapping("/create-account")
    public AccountEntity createAccount(@RequestBody AccountEntity account){
        return accountRepository.save(account);
    }

    @DeleteMapping("/delete-account/{id}")
    public Map<String, Boolean> deleteAccount(@PathVariable(value = "id") Integer accountId)
    {
        AccountEntity account = accountRepository.findById(accountId).get();

        accountRepository.delete(account);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return response;
    }
    @PatchMapping("/update-account/{accountId}")
    public AccountEntity updateBalance(
            @PathVariable Integer accountId,
            @RequestBody BalanceUpdateRequest balanceUpdateRequest) {

        AccountEntity account = accountRepository.findById(accountId).orElse(null);
        account.setBalance(account.getBalance()+balanceUpdateRequest.getBalance());
        return accountRepository.save(account);
    }
    @GetMapping("/get-account/{id}")
    public AccountEntity getAccountById(@PathVariable(value = "id") Integer accountId)
    {
        return accountRepository.findById(accountId).get();
    }

    @GetMapping("/find-by-account-number/{input}")
    public AccountEntity findByAccountNumber(@PathVariable String input) {
        AccountEntity account = accountRepository.findByAccountNumber(input);
            return account;

    }
    @GetMapping("/get-balance/{accountId}")
    public Float getAccountBalance(@PathVariable(value = "accountId") Integer accountId) {
        //ModelAndView getIndexPage = new ModelAndView("index");
        AccountEntity account = accountRepository.findById(accountId).orElse(null);
        if (account != null) {
            return account.getBalance();
        } else {
            return null;
        }
    }
    @GetMapping("/get-Id/{label}")
    public Integer getAccountId(@PathVariable(value = "label") String label) {
        //ModelAndView getIndexPage = new ModelAndView("index");
        AccountEntity account = accountRepository.findByLabel(label);
        if (account != null) {
            return account.getAccountId();
        } else {
            return null;
        }
    }
    @GetMapping("/get-balance-by-label/{label}")
    public Float getAccountBalanceByLabel(@PathVariable(value = "label") String label) {
        System.out.println("Received label: " + label); // Debugging line
        AccountEntity account = accountRepository.findByLabel(label);
        if (account != null) {
            System.out.println("Found account with balance: " + account.getBalance()); // Debugging line
            return account.getBalance();
        } else {
            // Handle the case where the account is not found, return an appropriate error response.
            return null;
        }
    }
    @GetMapping("/get-label/{accountId}")
    public String getAccountLabel(@PathVariable(value = "accountId") Integer accountId) {
        //ModelAndView getIndexPage = new ModelAndView("index");
        AccountEntity account = accountRepository.findById(accountId).orElse(null);
        if (account != null) {
            return account.getLabel();
        } else {
            return null;
        }
    }



}
