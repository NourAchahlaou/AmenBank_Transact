/* ********************************** popupv********************** */
const overlay = document.getElementById("overlay-virement");
function openpopupv() {
  closepopupGestionB();
  closepopupvm();
  closepopupvp();
  closepopupvb();
  closeNav1();
  closeNav2();
  document.querySelector(".popupV").style.display = "block";
  overlay.style.display = "block";
  virementCompte.style.display = "block";
}

function closepopupv() {
  document.querySelector(".popupV").style.display = "none";
  overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupV");
  const closeButton = document.getElementById("closeV");
  const virementCompte = document.getElementById("virementCompte");
  const virementSigne = document.getElementById("virementSigne");
  const virementhistorique = document.getElementById("virementhistorique");
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    virementCompte.style.display = "none";
    virementSigne.style.display = "none";
    virementhistorique.style.display = "none";
});
});
/* ****************************** switching the contenet of popupVCC****************/

const virementCompte = document.getElementById("virementCompte");
const virementSigne = document.getElementById("virementSigne");
const virementhistorique = document.getElementById("virementhistorique");
const virementComptebtn = document.getElementById("virementComptebtn");
const virementSignebtn = document.getElementById("virementSignebtn");
const virementhistoriquebtn = document.getElementById("virementhistoriquebtn");

virementComptebtn.addEventListener("click", () => {
  virementCompte.style.display = "block";
  virementSigne.style.display = "none";
  virementhistorique.style.display = "none";
});

virementSignebtn.addEventListener("click", () => {
  virementCompte.style.display = "none";
  virementSigne.style.display = "block";
  virementhistorique.style.display = "none";
});
virementhistoriquebtn.addEventListener("click", () => {
  virementCompte.style.display = "none";
  virementSigne.style.display = "none";
  virementhistorique.style.display = "block";
});

/* ************************ popupVERS benif **********************/
function openpopupvb() {
  closepopupGestionB();
  closepopupvm();
  closepopupvp();
  closepopupv();
  closeNav1();
  closeNav2();
  document.getElementById("popupVVB").style.display = "block";
  overlay.style.display = "block";
  virementCompteVVB.style.display = "block";
}

function closepopupvb() {
  document.getElementById("popupVVB").style.display = "none";
  overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const virementCompteVVB = document.getElementById("virementCompteVVB");
  const benefCompteVVB = document.getElementById("benefCompteVVB");
  const virementSigneVVB = document.getElementById("virementSigneVVB");
  const virementhistoriqueVVB = document.getElementById(
    "virementhistoriqueVVB",
  );
  const popup = document.getElementById("popupVVB");
  const closeButton = document.getElementById("closeVVB");
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    virementCompteVVB.style.display = "none";
    benefCompteVVB.style.display = "none";
    virementSigneVVB.style.display = "none";
    virementhistoriqueVVB.style.display = "none";
  });
});

/**********************************************************/

const virementCompteVVB = document.getElementById("virementCompteVVB");
const virementSigneVVB = document.getElementById("virementSigneVVB");
const virementhistoriqueVVB = document.getElementById("virementhistoriqueVVB");
const virementCompteVVBbtn = document.getElementById("virementCompteVVBbtn");
const virementSigneVVBbtn = document.getElementById("virementSigneVVBbtn");
const virementhistoriqueVVBbtn = document.getElementById(
  "virementhistoriqueVVBbtn",
);

virementCompteVVBbtn.addEventListener("click", () => {
  virementCompteVVB.style.display = "block";

  virementSigneVVB.style.display = "none";
  virementhistoriqueVVB.style.display = "none";
});


virementSigneVVBbtn.addEventListener("click", () => {
  virementCompteVVB.style.display = "none";

  virementSigneVVB.style.display = "block";
  virementhistoriqueVVB.style.display = "none";
});
virementhistoriqueVVBbtn.addEventListener("click", () => {
  virementCompteVVB.style.display = "none";

  virementSigneVVB.style.display = "none";
  virementhistoriqueVVB.style.display = "block";
});

/* ******************************VIREMENT DE MASSE ********************/
function openpopupvm() {
  closepopupGestionB();
  closepopupvp();
  closepopupv();
  closepopupvb();
  closeNav1();
  closeNav2();
  document.getElementById("popupVM").style.display = "block";
  overlay.style.display = "block";
  virementCompteVM.style.display = "block";
}

function closepopupvm() {
  document.getElementById("popupVM").style.display = "none";
  overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupVM");
  const closeButton = document.getElementById("closeVM");
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    virementCompteVM.style.display = "none";
    virementSigneVM.style.display = "none";
    virementhistoriqueVM.style.display = "none";
  });
});
/* *************************************************************************/

const virementCompteVM = document.getElementById("virementCompteVM");
const virementSigneVM = document.getElementById("virementSigneVM");
const virementhistoriqueVM = document.getElementById("virementhistoriqueVM");
const virementCompteVMbtn = document.getElementById("virementCompteVMbtn");
const virementSigneVMbtn = document.getElementById("virementSigneVMbtn");
const virementhistoriqueVMbtn = document.getElementById(
  "virementhistoriqueVMbtn",
);

virementCompteVMbtn.addEventListener("click", () => {
  virementCompteVM.style.display = "block";
  virementSigneVM.style.display = "none";
  virementhistoriqueVM.style.display = "none";
});

virementSigneVMbtn.addEventListener("click", () => {
  virementCompteVM.style.display = "none";
  virementSigneVM.style.display = "block";
  virementhistoriqueVM.style.display = "none";
});
virementhistoriqueVMbtn.addEventListener("click", () => {
  virementCompteVM.style.display = "none";
  virementSigneVM.style.display = "none";
  virementhistoriqueVM.style.display = "block";
});

/* ******************************** virement permanent*******************/
function openpopupvp() {
  closepopupGestionB();
  closepopupv();
  closepopupvb();
  closepopupvm();
  closeNav1();
  closeNav2();
  document.getElementById("popupVP").style.display = "block";
  overlay.style.display = "block";
  virementCompteVP.style.display = "block";
}

function closepopupvp() {
  document.getElementById("popupVP").style.display = "none";
  overlay.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById("popupVP");
  const closeButton = document.getElementById("closeVP");
  closeButton.addEventListener("click", function () {
    popup.style.display = "none";
    virementCompteVP.style.display = "none";
    virementbenefVP.style.display = "none";
    virementSigneVP.style.display = "none";
    virementhistoriqueVP.style.display = "none";
  });
});

/* ************************************************************************************/
const virementCompteVP = document.getElementById("virementCompteVP");
const virementbenefVP = document.getElementById("virementbenefVP");
const virementSigneVP = document.getElementById("virementSigneVP");
const virementhistoriqueVP = document.getElementById("virementhistoriqueVP");
const virementCompteVPbtn = document.getElementById("virementCompteVPbtn");
const virementbenefVPbtn = document.getElementById("virementbenefVPbtn");
const virementSigneVPbtn = document.getElementById("virementSigneVPbtn");
const virementhistoriqueVPbtn = document.getElementById(
  "virementhistoriqueVPbtn",
);

virementCompteVPbtn.addEventListener("click", () => {
  virementCompteVP.style.display = "block";
  virementbenefVP.style.display = "none";
  virementSigneVP.style.display = "none";
  virementhistoriqueVP.style.display = "none";
});
virementbenefVPbtn.addEventListener("click", () => {
  virementCompteVP.style.display = "none";
  virementbenefVP.style.display = "block";
  virementSigneVP.style.display = "none";
  virementhistoriqueVP.style.display = "none";
});

virementSigneVPbtn.addEventListener("click", () => {
  virementCompteVP.style.display = "none";
  virementbenefVP.style.display = "none";
  virementSigneVP.style.display = "block";
  virementhistoriqueVP.style.display = "none";
});
virementhistoriqueVPbtn.addEventListener("click", () => {
  virementCompteVP.style.display = "none";
  virementbenefVP.style.display = "none";
  virementSigneVP.style.display = "none";
  virementhistoriqueVP.style.display = "block";
});




/* *************************** EXIT /SUBMIT VCC *************************/

function clearFormFieldsV() {
  const fieldsToClear = [
    "montantV_1",
    "motifPaiementV_1",
    "dateExecutionV_1"
  ];
  const beneficiarySelect = document.getElementById("compteDebiterV_1");
  beneficiarySelect.value = "Sélectionner le compte à débiter";
  const devise = document.getElementById("deviseV_1");
  devise.value = "Devise";
  const Crediter = document.getElementById("compteCrediterV_1");
  Crediter.value = "Sélectionner le compte à créditer";
  fieldsToClear.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.value = "";
  });
}

const exitV_1 = document.getElementById("closeV_1");
exitV_1.addEventListener("click", clearFormFieldsV);

const btnV_1 = document.getElementById("submitTransactionV_1");
btnV_1.addEventListener("click", function(event) {
  event.preventDefault();

  const compteDebiter = document.getElementById("compteDebiterV_1");
  const devise = document.getElementById("deviseV_1");
  const compteCrediter = document.getElementById("compteCrediterV_1");
  const montant = document.getElementById("montantV_1");
  const motifPaiement = document.getElementById("motifPaiementV_1");
  const dateExecution = document.getElementById("dateExecutionV_1");

  // Send values to server
  console.log(compteDebiter.value);
  console.log(devise.value);
  console.log(compteCrediter.value);
  console.log(montant.value);
  console.log(motifPaiement.value);
  console.log(dateExecution.value);

  // Clear input fields
  clearFormFieldsV();
});

/* ******************************************exit/subvb****************************************/
function clearFormFieldsVB() {
  const fieldsToClear = [
    "montantVB_1",
    "motifPaiementVB_1",
    "dateExecutionVB_1",
    "beneficiarySearchVB_1",
    "Nom/RSVB_1",
    "Num_compteVB_1"
  ];
  const beneficiarySelect = document.getElementById("compteDebiterVB_1");
  beneficiarySelect.value = "Sélectionner le compte à débiter";
  const devise = document.getElementById("deviseVB_1");
  devise.value = "Devise";
  const bank = document.getElementById("BanqueVB_1");
  bank.value = "Banque";
  fieldsToClear.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field.type === "checkbox") {
      field.checked = false;
    } else {
      field.value = "";
    }
  });
}


const exitVB_1 = document.getElementById("closeVVB_1");
exitVB_1.addEventListener("click", clearFormFieldsVB);

const submitButton = document.getElementById("submitTransactionVVB_1");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  const compteDebiter = document.getElementById("compteDebiterVB_1");
  const devise = document.getElementById("deviseVB_1");
  const montant = document.getElementById("montantVB_1");
  const motifPaiement = document.getElementById("motifPaiementVB_1");
  const dateExecution = document.getElementById("dateExecutionVB_1");
  const beneficiarylist = document.getElementById("beneficiary-list");
  const nomRaisonSociale = document.getElementById("Nom/RSVB_1");
  const banque = document.getElementById("BanqueVB_1");
  const numCompte = document.getElementById("Num_compteVB_1");

  // Handle form submission logic here
  console.log(compteDebiter.value);
  console.log(devise.value);
  console.log(montant.value);
  console.log(motifPaiement.value);
  console.log(dateExecution.value);
  console.log(beneficiarylist.value);
  console.log(nomRaisonSociale.value);
  console.log(banque.value);
  console.log(numCompte.value);
  clearFormFieldsVB();
});
/* ************************************************************sub/exit gestion benef ********************************/
function clearFormFieldsVB_2() {
  const fieldsToClear = [
    "Nom/RSVB_2",
    "RIB_2",
    "libelléVB_2",
    "telephoneVB_2",
    "emailVB"
  ];

  fieldsToClear.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.value = "";
  });
}

const exitVVB_2 = document.getElementById("closeVVB_2");
exitVVB_2.addEventListener("click", clearFormFieldsVB_2);

const submitBtnVVB_2 = document.getElementById("submitTransactionVVB_2");
submitBtnVVB_2.addEventListener("click", function(event) {
  event.preventDefault();

  const nomPrenomRaison = document.getElementById("Nom/RSVB_2");
  const rib = document.getElementById("RIB_2");
  const libelle = document.getElementById("libelléVB_2");
  const telephone = document.getElementById("telephoneVB_2");
  const email = document.getElementById("emailVB");

  // Send values to server
  console.log(nomPrenomRaison.value);
  console.log(rib.value);
  console.log(libelle.value);
  console.log(telephone.value);
  console.log(email.value);

  // Clear input fields
  clearFormFieldsVB_2();
});
/* ************************************************************sub/exitvm ********************************/

function clearFormFieldsVM() {
  const fieldsToClear = [
    "nombre-ordreVM_1",
    "dateExecutionVM_1",
    "montantVM_1",
    "motifPaiementVM_1"
  ];
  const beneficiarySelect = document.getElementById("compte-debiterVM_1");
  beneficiarySelect.value = "Sélectionner le compte à débiter";
  fieldsToClear.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.value = "";
  });
}

function continueVMClick() {
  const selectBenefVM = document.getElementById("selectBenefVM");
  const formVM = document.getElementById("formVM");
  selectBenefVM.classList.remove("hiddenVM_1");
  formVM.style.display = "none";

  const compteDebiter = document.getElementById("compte-debiterVM_1");
  const nombreOrdre = document.getElementById("nombre-ordreVM_1");
  const dateExecution = document.getElementById("dateExecutionVM_1");
  const montant = document.getElementById("montantVM_1");
  const motifPaiement = document.getElementById("motifPaiementVM_1");

  // Send values to server or perform other actions
  console.log(compteDebiter.value);
  console.log(nombreOrdre.value);
  console.log(dateExecution.value);
  console.log(montant.value);
  console.log(motifPaiement.value);

  // Clear input fields
  clearFormFieldsVM();
}
const exitVM_1 = document.getElementById("closeVM_1");
exitVM_1.addEventListener("click", clearFormFieldsVM);
/* *********************************************** nouveau virement de masse (button continue)*******************************************************/

  const beneficiaryCheckboxes = document.querySelectorAll(
      'input[name="beneficiary"]',
  );
  const beneficiarySearch = document.getElementById("beneficiarySearch");
  const transferButton = document.getElementById("transferButton");
  const transferDetails = document.getElementById("transferDetails");
  const transferDetailsTable = transferDetails.querySelector("tbody");
  const retourbtn = document.getElementById("retourbtn");
  const formVM = document.getElementById("formVM");
  retourbtn.addEventListener("click",()=>{
    formVM.style.display = "block";
    transferDetails.style.display="none";

  })
  // beneficiarySearch.addEventListener("input", () => {
  //   const searchValue = beneficiarySearch.value.toLowerCase();
  //   beneficiaryCheckboxes.forEach((checkbox) => {
  //     const label = checkbox.parentNode;
  //     const beneficiaryName = label.textContent.toLowerCase();
  //     label.style.display = beneficiaryName.includes(searchValue)
  //         ? "block"
  //         : "none";
  //   });
  // });


  transferButton.addEventListener("click", () => {
    const selectedBeneficiaries = Array.from(beneficiaryCheckboxes)
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);

    if (selectedBeneficiaries.length === 0) {
      alert("Please select at least one beneficiary.");
      return;
    }

    const transferAmount = parseFloat(prompt("Enter the transfer amount:"));

    if (isNaN(transferAmount) || transferAmount <= 0) {
      alert("Please enter a valid transfer amount.");
      return;
    }

    // Display transfer details in the table
    transferDetailsTable.innerHTML = "";
    selectedBeneficiaries.forEach((beneficiary) => {
      const row = document.createElement("tr");
      row.innerHTML = `
      <td>${beneficiary}</td>
      <td>${new Date().toLocaleDateString()}</td>
      <td>${transferAmount}</td>
      <td><button class="changeAmountButton">Change Amount</button></td>
    `;
      transferDetailsTable.appendChild(row);
    });

    // Show transfer details
    transferDetails.classList.remove("hiddenVM_2");
  });

  // Event delegation for dynamically added buttons
  transferDetailsTable.addEventListener("click", (event) => {
    if (event.target.classList.contains("changeAmountButton")) {
      const row = event.target.closest("tr");
      const beneficiary = row.querySelector("td:first-child").textContent;
      const newAmount = parseFloat(
          prompt(`Enter new amount for ${beneficiary}:`),
      );

      if (isNaN(newAmount) || newAmount <= 0) {
        alert("Please enter a valid amount.");
      } else {
        row.querySelector("td:nth-child(3)").textContent = newAmount;

      }
    }
  });
  fetch("http://localhost:8082/beneficiary/get-all-beneficiaries")
      .then((response) => response.json())
      .then((beneficiaries) => {
        const beneficiaryListDiv_3 = document.getElementById("beneficiary-list_3");

        beneficiaries.forEach((beneficiary) => {
          const label = document.createElement("label");
          label.classList.add("label-benef");

          const input = document.createElement("input");
          input.type = "checkbox";
          input.name = "beneficiary";
          input.value = beneficiary.label; // Use the beneficiary's label as the value

          const text = document.createTextNode(beneficiary.label); // Use the beneficiary's label as the text

          label.appendChild(input);
          label.appendChild(text);

          beneficiaryListDiv_3.appendChild(label);
        });
      })
      .catch((error) => {
        console.error("Error fetching beneficiaries: ", error);
      });

/* ********************************************************exit/subvp1**************************************/

function clearFormFieldsCompteCompte() {
    const fieldsToClear = [
        "Premier_virementVP_1",
        "dernier_virementVP_1",
        "MontantVP_1",
        "Motif-paiementVP_1"
    ];
  const periode= document.getElementById("PériodicitéVP_1") ;
  periode.value="period";
  const debiter = document.getElementById("Compte-débiterVP_1");
  debiter.value = "Sélectionner le compte à débiter";
  const crediter = document.getElementById("compteCrediteurVP_1");
  crediter.value = "Sélectionner le compte à créditer";
  const devise = document.getElementById("DeviseVP_1");
  devise.value = "Sélectionner le devise du virement";
    fieldsToClear.forEach(fieldId => {
        const field = document.getElementById(fieldId);
      field.value = "";
    });
}

const exitVP_1 = document.getElementById("closeVP_1");
exitVP_1.addEventListener("click", clearFormFieldsCompteCompte);

const submitBtnVP_1 = document.getElementById("submitTransactionVP_1");
submitBtnVP_1.addEventListener("click", function(event) {
    event.preventDefault();
    const jourExecution = document.getElementById("jourExecutionVP_1");
    const periode = document.getElementById("PériodicitéVP_1");

    const dernier_virementVP_1 = document.getElementById("dernier_virementVP_1");
    const Premier_virementVP_1 = document.getElementById("Premier_virementVP_1");
    const compteDebiteur = document.getElementById("Compte-débiterVP_1");
    const devise = document.getElementById("DeviseVP_1");
    const compteCrediteur = document.getElementById("compteCrediteurVP_1");
    const montant = document.getElementById("MontantVP_1");
    const motifPaiement = document.getElementById("Motif-paiementVP_1");

    // Send values to server or perform other actions
    console.log(jourExecution.value);
    console.log(periode.value);
    console.log(dernier_virementVP_1.value);
    console.log(Premier_virementVP_1.value);
    console.log(compteDebiteur.value);
    console.log(devise.value);
    console.log(compteCrediteur.value);
    console.log(montant.value);
    console.log(motifPaiement.value);

    // Clear input fields
    clearFormFieldsCompteCompte();
});



/* ********************************************************exit/subvp2**************************************/
function clearFormFieldsBenef() {
  const fieldsToClear = [

    "PériodicitéVP_2",

    "dernier_virementVP_2",
    "Premier_virementVP_2",
    "nomBeneficiaireVP_2",
    "banqueVP_2",
    "ribVP_2",
    "motifPaiementVP_2",

  ];

  const periode= document.getElementById("PériodicitéVP_2") ;
  periode.value="period";
  const debiter = document.getElementById("compteDebiteurVP_2");
  debiter.value = "Sélectionner le compte à débiter";
  const devise = document.getElementById("deviseVP_2");
  devise.value = "Sélectionner le devise du virement";
  fieldsToClear.forEach(fieldId => {
    const field = document.getElementById(fieldId);
    field.value = "";
  });

}

const exitVP_2 = document.getElementById("closeVP_2");
exitVP_2.addEventListener("click", clearFormFieldsBenef);

const submitBtnVP_2 = document.getElementById("submitTransactionVP_2");
submitBtnVP_2.addEventListener("click", function(event) {
  event.preventDefault();


  const periode = document.getElementById("PériodicitéVP_2");
  const moisPremierVirement = document.getElementById("Premier_virementVP_2");
  const anneePremierVirement = document.getElementById("dernier_virementVP_2");
  const nomBeneficiaire = document.getElementById("nomBeneficiaireVP_2");
  const banque = document.getElementById("banqueVP_2");
  const rib = document.getElementById("ribVP_2");
  const motifPaiement = document.getElementById("motifPaiementVP_2");
  const devise = document.getElementById("deviseVP_2");
  const compteDebiteur = document.getElementById("compteDebiteurVP_2");

  // Send values to server or perform other actions

  console.log(periode.value);
  console.log(moisPremierVirement.value);
  console.log(anneePremierVirement.value);

  console.log(nomBeneficiaire.value);
  console.log(banque.value);
  console.log(rib.value);
  console.log(motifPaiement.value);
  console.log(devise.value);
  console.log(compteDebiteur.value);

  // Clear input fields
  clearFormFieldsBenef();
});

/* **************************************gestion beneficiary***************************************/
function openpopupGestionB() {
    closepopupv();
    closepopupvm();
    closepopupvp();
    closepopupvb();
    closeNav1();
    closeNav2();
    document.getElementById("popupVVB_gestionbenef").style.display = "block";
    overlay.style.display = "block";
    document.getElementById("benefCompteVVB").style.display = "block";
}

function closepopupGestionB() {
    document.getElementById("popupVVB_gestionbenef").style.display = "none";
    overlay.style.display = "none";
}
/* ************************************************************************************/
const benefModifierVVB1 = document.getElementById("benefModifierVVB");
const benefCompteVVB1 = document.getElementById("benefCompteVVB");
const benefSupprimerVVB1 = document.getElementById("benefSupprimerVVB");
const benefCompteVVBbtn1 = document.getElementById("benefCompteVVBbtn");
const benefModifierVVBbtn1 = document.getElementById("benefModifierVVBbtn");
const benefSupprimerVVBbtn1 = document.getElementById(
    "benefSupprimerVVBbtn",
);

benefCompteVVBbtn1.addEventListener("click", () => {
    benefCompteVVB1.style.display = "block";
    benefModifierVVB1.style.display = "none";
    benefSupprimerVVB1.style.display = "none";
});

benefModifierVVBbtn1.addEventListener("click", () => {
    benefCompteVVB1.style.display = "none";
    benefModifierVVB1.style.display = "block";
    benefSupprimerVVB1.style.display = "none";
});
benefSupprimerVVBbtn1.addEventListener("click", () => {
    benefCompteVVB1.style.display = "none";
    benefModifierVVB1.style.display = "none";
    benefSupprimerVVB1.style.display = "block";
});
/* ************************************************************************************/
document.addEventListener("DOMContentLoaded", function () {
    const popup = document.getElementById("popupVVB_gestionbenef");
    const closeButton = document.getElementById("closeVVB_2");
    const benefCompte = document.getElementById("benefCompteVVB");
    const benefModifier = document.getElementById("benefModifierVVB");
    const benefSupprimer = document.getElementById("benefSupprimerVVB");
    closeButton.addEventListener("click", function () {
        popup.style.display = "none";
        benefModifier.style.display = "none";
        benefCompte.style.display = "none";
        benefSupprimer.style.display = "none";
    });
});

function handlebenefModifierVVBbtnClick() {
    const beneficiaryCheckboxesGB = document.querySelectorAll(
        'input[name="beneficiary"]'
    );
    const beneficiarySearch1 = document.getElementById("beneficiarySearchVB_2");

    beneficiarySearch1.addEventListener("input", () => {
        const searchValue = beneficiarySearch1.value.toLowerCase();
        beneficiaryCheckboxesGB.forEach((checkbox) => {
            const label = checkbox.parentNode;
            const beneficiaryName = label.textContent.toLowerCase();
            label.style.display = beneficiaryName.includes(searchValue)
                ? "block"
                : "none";
        });
    });

}
    function handleSUPPRIMERVVMBClick() {
        const beneficiaryCheckboxesGB = document.querySelectorAll(
            'input[name="beneficiary"]');
        const selectedBeneficiaries = Array.from(beneficiaryCheckboxesGB)
            .filter((checkbox) => checkbox.checked)
            .map((checkbox) => checkbox.value);

        if (selectedBeneficiaries.length === 0) {
            alert("Please select at least one beneficiary.");

        }
        else {
            const modifyforum = document.getElementById("modifyforum");
            modifyforum.classList.remove("hiddenVM");
        }


    }



const ModifyVVB = document.getElementById("modifyVVB");
ModifyVVB.addEventListener("click", handleSUPPRIMERVVMBClick);
const SUPPRIMERVVMB = document.getElementById("SUPPRIMERVVMB");
SUPPRIMERVVMB.addEventListener("click", handleSUPPRIMERVVMBClick);
const benefModifierVVBbtnclick = document.getElementById("benefModifierVVBbtn");
benefModifierVVBbtnclick.addEventListener("click", handlebenefModifierVVBbtnClick);
const benefSupprimerVVBbtnclick = document.getElementById("benefSupprimerVVBbtn");
benefSupprimerVVBbtnclick.addEventListener("click", handlebenefModifierVVBbtnClick);

/* ************************************************************************************/