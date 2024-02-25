/**************date**********************/
function updateDateTime() {
  const dateTimeElement = document.getElementById("currentDateTime");
  const now = new Date();

  // Format the date and time as desired
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  dateTimeElement.textContent = now.toLocaleDateString("fr", options);
}

// Update the date and time initially and then every second
updateDateTime();
setInterval(updateDateTime, 1000);
/***********************************************************/
function openNav1() {
  closeNav2(); // Close nav2 if open
  document.getElementById("mysidenav").style.width = "280px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav1() {
  document.getElementById("mysidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}

function openNav2() {
  closeNav1(); // Close nav1 if open
  document.getElementById("mysidenav2").style.width = "280px";
  document.getElementById("main").style.marginLeft = "300px";
}

function closeNav2() {
  document.getElementById("mysidenav2").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
}
/* **********************************************************/

/* *****************************printbutton****************************/

function printTable() {
  const tableToPrint = document.getElementById("T-historique");
  const printWindowmain = window.open("", "_blank");
  printWindowmain.document.write(
    '<html lang="fr"><head><title>Print Table</title></head><body>',
  );
  printWindowmain.document.write(
    "<style>table{border-collapse: collapse; width: 100%;}th, td{border: 1px solid black; padding: 8px;}</style>",
  );
  printWindowmain.document.write("<div>" + tableToPrint.outerHTML + "</div>");
  printWindowmain.document.write("</body></html>");
  printWindowmain.document.close();
  printWindowmain.print();
}

/* *************************************** imprimer *******************************************/
function printTableV() {
  const tableToPrint = document.getElementById("T_virementhistorique");
  const printWindowV = window.open("", "_blank");
  printWindowV.document.write(
    '<html lang="fr"><head><title>Print Table</title></head><body>',
  );
  printWindowV.document.write(
    "<style>table{border-collapse: collapse; width: 100%;}th, td{border: 1px solid black; padding: 8px;}</style>",
  );
  printWindowV.document.write("<div>" + tableToPrint.outerHTML + "</div>");
  printWindowV.document.write("</body></html>");
  printWindowV.document.close();
  printWindowV.print();
  document.querySelector(".popupV").style.display = "none";
  overlay.style.display = "none";
}
function printTableVB() {
  const tableToPrint = document.getElementById("T-virementhistoriqueVVB");
  const printWindowVB = window.open("", "_blank");
  printWindowVB.document.write(
    '<html lang="fr"><head><title>Print Table</title></head><body>',
  );
  printWindowVB.document.write(
    "<style>table{border-collapse: collapse; width: 100%;}th, td{border: 1px solid black; padding: 8px;}</style>",
  );
  printWindowVB.document.write("<div>" + tableToPrint.outerHTML + "</div>");
  printWindowVB.document.write("</body></html>");
  printWindowVB.document.close();
  printWindowVB.print();
  document.getElementById("popupVVB").style.display = "none";
  overlay.style.display = "none";
}
function printTableVM() {
  const tableToPrint = document.getElementById("T-virementhistoriqueVM");
  const printWindow = window.open("", "_blank");
  printWindow.document.write(
    '<html lang="fr"><head><title>Print Table</title></head><body>',
  );
  printWindow.document.write(
    "<style>table{border-collapse: collapse; width: 100%;}th, td{border: 1px solid black; padding: 8px;}</style>",
  );
  printWindow.document.write("<div>" + tableToPrint.outerHTML + "</div>");
  printWindow.document.write("</body></html>");
  printWindow.document.close();
  printWindow.print();
  document.getElementById("popupVM").style.display = "none";
  overlay.style.display = "none";
}
function printTableVP_1() {
  const tableToPrint = document.getElementById("T-virementhistoriqueVP_1");
  const printWindowVP_1 = window.open("", "_blank");
  printWindowVP_1.document.write(
    '<html lang="fr"><head><title>Print Table</title></head><body>',
  );
  printWindowVP_1.document.write(
    "<style>table{border-collapse: collapse; width: 100%;}th, td{border: 1px solid black; padding: 8px;}</style>",
  );
  printWindowVP_1.document.write("<div>" + tableToPrint.outerHTML + "</div>");
  printWindowVP_1.document.write("</body></html>");
  printWindowVP_1.document.close();
  printWindowVP_1.print();
  document.getElementById("popupVP").style.display = "none";
  overlay.style.display = "none";
}
function printTableVP_2() {
  const tableToPrint = document.getElementById("T-virementhistoriqueVP_2");
  const printWindowVP_2 = window.open("", "_blank");
  printWindowVP_2.document.write(
    '<html lang="fr"><head><title>Print Table</title></head><body>',
  );
  printWindowVP_2.document.write(
    "<style>table{border-collapse: collapse; width: 100%;}th, td{border: 1px solid black; padding: 8px;}</style>",
  );
  printWindowVP_2.document.write("<div>" + tableToPrint.outerHTML + "</div>");
  printWindowVP_2.document.write("</body></html>");
  printWindowVP_2.document.close();
  printWindowVP_2.print();
  document.getElementById("popupVP").style.display = "none";
  overlay.style.display = "none";
}

/* *******************nav bar***************************/
window.onscroll = function () {
  myFunction();
};
const sidenav2 = document.getElementById("mysidenav2");
const sidenav = document.getElementById("mysidenav");
const navbar = document.getElementById("navbar");
const sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    sidenav.classList.add("sticky");
    sidenav2.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    sidenav.classList.remove("sticky");
    sidenav2.classList.remove("sticky");
  }
}
/* *********************** back and front ( selected accounts) ****************************************/
window.addEventListener("DOMContentLoaded", function () {
  // Function to update the account balance based on the selected account label
  function updateAccountBalance(label) {
    // Make a request to fetch the balance for the selected account label
    fetch(`http://localhost:8082/account/get-balance-by-label/${label}`)
      .then((response) => response.json())
      .then((data) => {
        if (data !== null) {
          document.getElementById("solde").textContent = data + " $";
        } else {
          console.error("Failed to fetch account balance.");
        }
      })
      .catch((error) => {
        console.error("Error fetching account balance:", error);
      });
  }

  // Add an event listener to the "libelle-compte" select element
  document
    .getElementById("libelle-compte")
    .addEventListener("change", function () {
      const label = this.value; // Get the selected account label
      updateAccountBalance(label); // Update the account balance
    });

  // Fetch the account data from the backend and populate the select element on page load
  fetch("http://localhost:8082/account/get-all-accounts")
    .then((response) => response.json())
    .then((accounts) => {
      const selectElement = document.getElementById("libelle-compte");
      const selectCompteDebiterV = document.getElementById("compteDebiterV_1");
      const selectComptecrediterV =
        document.getElementById("compteCrediterV_1");
      const selectCompteDebiterVB =
        document.getElementById("compteDebiterVB_1");
      const selectCompteDebiterVM =
        document.getElementById("compte-debiterVM_1");
      const selectCompteDebiterVVP =
        document.getElementById("Compte-débiterVP_1");
      const selectCompteCrediteurVVP = document.getElementById(
        "compteCrediteurVP_1",
      );
      const selectCompteDebiterVBVP =
        document.getElementById("compteDebiteurVP_2");
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectElement.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectCompteDebiterV.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectComptecrediterV.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectCompteDebiterVB.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectCompteDebiterVM.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectCompteDebiterVVP.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectCompteCrediteurVVP.appendChild(option);
      });
      /* ***********************************************************/
      accounts.forEach((account) => {
        const option = document.createElement("option");
        option.textContent = account.label; // Assuming your AccountEntity has a "label" property
        selectCompteDebiterVBVP.appendChild(option);
      });
      /* ***********************************************************/
      // Trigger initial balance update based on the selected account
      const label = selectElement.value;
      updateAccountBalance(label);
    })
    .catch((error) => {
      console.error("Error fetching accounts:", error);
      // Handle errors here (e.g., show an error message)
    });
});
/* *****************************************************************************************************/
function populateMainsignedTable() {
    const tableBody = document.getElementById("T-historique");
    const row1 = document.createElement("tr");
    row1.innerHTML = ` 
                
                <th>Compte à débiter</th>
                <th>Compte à créditer</th>
                <th>Montant</th>
                <th>Motif paiement</th>
                <th>Devise</th>
                <th>Date d'exécution</th>
            
                `;
    tableBody.appendChild(row1);

    // Fetch unsigned CAC transactions and populate the table
    fetchsignedCACTransactions().then((transactions) => {
        transactions.forEach((transaction) => {
            const row = document.createElement("tr");
            row.innerHTML = `
          <td>${transaction.accountDebit.label}</td>
          <td>${transaction.creditedAccountNumber.label}</td>
          <td>${transaction.transferMoney}</td>
          <td>${transaction.reason}</td>
          <td>${transaction.devise}</td>
          <td>${transaction.date}</td>
        
          
        `;
            tableBody.appendChild(row);
        });
    });
}

// Call the populateCACTable function to initially populate the table
populateMainsignedTable();

document
    .getElementById("refreshTableButtonmain")
    .addEventListener("click", () => {
        const tableBody = document.getElementById("T-historique");
        tableBody.innerHTML = "";
        populateMainsignedTable();
    });
/* *********************************  this is for cac nouveau virement*************************************************/

function fetchAccountIds(
  selectedCompteDebiterLabel,
  selectedCompteCrediterLabel,
) {
  // Create a promise to fetch the account ID for compteDebiter
  const compteDebiterPromise = fetch(
    `http://localhost:8082/account/get-Id/${selectedCompteDebiterLabel}`,
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to fetch compteDebiter ID.");
      }
    })
    .catch((error) => {
      console.error("Error fetching compteDebiter ID: ", error);
    });

  const compteCrediterPromise = fetch(
    `http://localhost:8082/account/get-Id/${selectedCompteCrediterLabel}`,
  )
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to fetch compteCrediter ID.");
      }
    })
    .catch((error) => {
      console.error("Error fetching compteCrediter ID: ", error);
    });

  return Promise.all([compteDebiterPromise, compteCrediterPromise]).then(
    (results) => {
      const [compteDebiterId, compteCrediterId] = results;
      if (compteDebiterId !== null && compteCrediterId !== null) {
        return { compteDebiterId, compteCrediterId };
      } else {
        throw new Error("Failed to fetch account IDs.");
      }
    },
  );
}

function createCACTransaction() {
  // Gather data from the form
  let compteDebiterLabel = document.getElementById("compteDebiterV_1").value;
  let compteCrediterLabel = document.getElementById("compteCrediterV_1").value;
  let devise = document.getElementById("deviseV_1").value;
  let montant = document.getElementById("montantV_1").value;
  let motifPaiement = document.getElementById("motifPaiementV_1").value;
  let dateExecution = document.getElementById("dateExecutionV_1").value;

  fetchAccountIds(compteDebiterLabel, compteCrediterLabel).then(
    (accountIds) => {
      if (
        accountIds.compteDebiterId !== null &&
        accountIds.compteCrediterId !== null
      ) {
        // Create a data object with the retrieved account IDs
        let data = {
          accountDebit: { accountId: accountIds.compteDebiterId },
          devise: devise, // You can set the devise as needed
          creditedAccountNumber: { accountId: accountIds.compteCrediterId },
          transferMoney: montant,
          reason: motifPaiement,
          date: dateExecution,
        };

        // Send a POST request to your backend
        fetch(
          "http://localhost:8082/cac/create-cac/" +
            accountIds.compteDebiterId +
            "/" +
            accountIds.compteCrediterId,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          },
        )
          .then((response) => {
            if (response.status === 200) {
              // Handle success response from the backend
              console.log("CAC transaction created successfully");
            } else {
              // Handle errors
              console.error("Failed to create CAC transaction");
            }
          })
          .catch((error) => {
            console.error("Error creating CAC transaction: ", error);
          });
      } else {
        console.error("Failed to fetch account IDs.");
      }
    },
  );


}
/* ********************************************virement cac a signe*****************************************/
function fetchUnsignedCACTransactions() {
  // Replace with your actual endpoint for fetching unsigned CAC transactions
  const fetchUrl = "http://localhost:8082/cac/get-unsigned-cac-transactions";

  return fetch(fetchUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to fetch unsigned CAC transactions.");
      }
    })
    .catch((error) => {
      console.error("Error fetching unsigned CAC transactions: ", error);
    });
}

// Function to populate the table with CAC transactions
function populateCACTable() {
  const tableBody = document.getElementById("transferDetails tbody");
  const row1 = document.createElement("tr");
  row1.innerHTML = ` 
             
                <th>Compte à débiter</th>
                <th>Compte à créditer</th>
                <th>Montant</th>
                <th>Motif paiement</th>
                <th>Devise</th>
                <th>Date d'exécution</th>
              
                `;
  tableBody.appendChild(row1);
  // Fetch unsigned CAC transactions and populate the table
  fetchUnsignedCACTransactions().then((transactions) => {
    transactions.forEach((transaction) => {
      const row = document.createElement("tr");

      row.innerHTML = `
          <td>${transaction.accountDebit.label}</td>
          <td>${transaction.creditedAccountNumber.label}</td>
          <td>${transaction.transferMoney}</td>
          <td>${transaction.reason}</td>
          <td>${transaction.devise}</td>
          <td>${transaction.date}</td>
          <td>
            <button class="signCACButton" data-cac-id="${transaction.cacId}">Signer</button>
          </td>
          <td><button type="button" class="modifierbtn" data-cac-id="${transaction.cacId}">
           Supprimer
          </button></td>
          
        `;

      tableBody.appendChild(row);
    });
  });
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("signCACButton")) {
    const cacId = event.target.getAttribute("data-cac-id");
      const virementhistorique = document.getElementById("virementhistorique");

    // Send a POST request to mark the CAC transaction as signed
    fetch(`http://localhost:8082/cac/sign-cac/${cacId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.status === 200) {
          // Transaction successfully signed
          console.log("CAC transaction signed successfully.");
          const tableBody = document.getElementById("transferDetails tbody");
          tableBody.innerHTML = "";
          populateCACTable();
            virementhistorique.style.display = "block";
        } else {
          // Handle errors
          console.error("Error signing CAC transaction.");
        }
      })
      .catch((error) => {
        console.error("Error signing CAC transaction: ", error);
      });
  }
});

// Call the populateCACTable function to initially populate the table
populateCACTable();

document.getElementById("refreshTableButton").addEventListener("click", () => {
  const tableBody = document.getElementById("transferDetails tbody");
  tableBody.innerHTML = "";
  populateCACTable();
});

/* ******************************************** signed (historique ) virement*****************************************/
function fetchsignedCACTransactions() {
  // Replace with your actual endpoint for fetching unsigned CAC transactions
  const fetchUrl = "http://localhost:8082/cac/get-signed-cac-transactions";

  return fetch(fetchUrl)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error("Failed to fetch signed CAC transactions.");
      }
    })
    .catch((error) => {
      console.error("Error fetching signed CAC transactions: ", error);
    });
}

// Function to populate the table with CAC transactions
function populateCACsignedTable() {
  const tableBody = document.getElementById("T_virementhistorique");
  const row1 = document.createElement("tr");
  row1.innerHTML = ` 
                
                <th>Compte à débiter</th>
                <th>Compte à créditer</th>
                <th>Montant</th>
                <th>Motif paiement</th>
                <th>Devise</th>
                <th>Date d'exécution</th>
            
                `;
  tableBody.appendChild(row1);

  // Fetch unsigned CAC transactions and populate the table
  fetchsignedCACTransactions().then((transactions) => {
    transactions.forEach((transaction) => {
      const row = document.createElement("tr");
      row.innerHTML = `
          <td>${transaction.accountDebit.label}</td>
          <td>${transaction.creditedAccountNumber.label}</td>
          <td>${transaction.transferMoney}</td>
          <td>${transaction.reason}</td>
          <td>${transaction.devise}</td>
          <td>${transaction.date}</td>
        
          
        `;
      tableBody.appendChild(row);
    });
  });
}

// Call the populateCACTable function to initially populate the table
populateCACsignedTable();

document
  .getElementById("refreshTableButton_1")
  .addEventListener("click", () => {
    const tableBody = document.getElementById("T_virementhistorique");
    tableBody.innerHTML = "";
    populateCACsignedTable();
  });
/* ******************************************supprimer cac***************************************/
document.addEventListener("click", (event) => {
  if (event.target.classList.contains("modifierbtn")) {
    const cacId = event.target.getAttribute("data-cac-id");
    const vbId = event.target.getAttribute("data-vb-id");

    // Send a DELETE request to delete the CAC transaction
    fetch(`http://localhost:8082/cac/delete-cac/${cacId}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.status === 200) {
          // Transaction successfully deleted
          console.log("CAC transaction deleted successfully.");
          const tableBody = document.getElementById("transferDetails tbody");
          tableBody.innerHTML = "";
          populateCACTable();
        } else {
          // Handle errors
          console.error("Error deleting CAC transaction.");
        }
      })
      .catch((error) => {
        console.error("Error deleting CAC transaction: ", error);
      });
      fetch(`http://localhost:8082/vb/delete-vb/${vbId}`, {
          method: "DELETE",
      })
          .then((response) => {
              if (response.status === 200) {
                  // Transaction successfully deleted
                  console.log("vb transaction deleted successfully.");
                  const tableBody = document.getElementById("transferDetails tbody_vb");
                  tableBody.innerHTML = "";
                  populateVBTable();
              } else {
                  // Handle errors
                  console.error("Error deleting vb transaction.");
              }
          })
          .catch((error) => {
              console.error("Error deleting vb transaction: ", error);
          });
  }
});
/* ***************************************** create vb*****************************************************/
async function fetchAccountvbIds(selectedCompteDebiterLabel, beneficiaryLabel) {
    try {
        const response1 = await fetch(`http://localhost:8082/account/get-Id/${selectedCompteDebiterLabel}`);
        if (response1.status === 200) {
            const compteDebiterId = await response1.json();

            const response2 = await fetch(`http://localhost:8082/beneficiary/get-by-label/${beneficiaryLabel}`);
            if (response2.status === 200) {
                const benefId = await response2.json();
                return { compteDebiterId, benefId };
            } else {
                throw new Error("Failed to fetch beneficiary ID.");
            }
        } else {
            throw new Error("Failed to fetch compteDebiter ID.");
        }
    } catch (error) {
        console.error("Error fetching data: ", error);
        throw error; // Rethrow the error to be handled elsewhere if needed
    }
}



function createVirementVersBeneficiaire() {
    try {
        // Gather data from the form
        const compteDebiterLabel = document.getElementById("compteDebiterVB_1").value;
        const devise = document.getElementById("deviseVB_1").value;
        const montant = document.getElementById("montantVB_1").value;
        const motifPaiement = document.getElementById("motifPaiementVB_1").value;
        const dateExecution = document.getElementById("dateExecutionVB_1").value;
        const beneficiaryLabel = document.getElementById("beneficiary-list").value;

        // Debugging: Log the gathered data
        console.log("compteDebiterLabel: ", compteDebiterLabel);
        console.log("devise: ", devise);
        console.log("montant: ", montant);
        console.log("motifPaiement: ", motifPaiement);
        console.log("dateExecution: ", dateExecution);
        console.log("beneficiaryLabel: ", beneficiaryLabel);

        // Call the fetchAccountvbIds function to fetch account and beneficiary IDs
        fetchAccountvbIds(compteDebiterLabel, beneficiaryLabel).then(
            (accountIds) => {
            if (accountIds.compteDebiterId !== null && accountIds.benefId !== null) {
                // Create a data object with the retrieved IDs
                const data = {
                    accountDebit: { accountId: accountIds.compteDebiterId },
                    devise: devise,
                    beneficiary: { beneficiaryId: accountIds.benefId }, // Make sure this property name is correct
                    transferMoney: montant,
                    reason: motifPaiement,
                    date: dateExecution,
                };

                // Send a POST request to your backend API
                fetch(`http://localhost:8082/vb/create-vb/${accountIds.compteDebiterId}/${accountIds.benefId}`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                })
                    .then((response) => {
                        if (response.status === 200) {
                            // Handle success response from the backend
                            console.log("Virement vers bénéficiaire created successfully");
                        } else {
                            // Handle errors
                            console.error("Failed to create Virement vers bénéficiaire");
                        }
                    })
                    .catch((error) => {
                        console.error("Error creating Virement vers bénéficiaire: ", error);
                    });
            } else {
                console.error("Failed to fetch account or beneficiary ID.");
            }
        });

        // Close the popup or perform other actions if needed

    } catch (error) {
        console.error("Error in createVirementVersBeneficiaire: ", error);
    }
}



/* ********************************************* virement a signe vb*****************************************/

function fetchUnsignedVBTransactions() {
    // Replace with your actual endpoint for fetching unsigned VB transactions
    const fetchUrl = "http://localhost:8082/vb/get-unsigned-vb-transactions";

    return fetch(fetchUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to fetch unsigned VB transactions.");
            }
        })
        .catch((error) => {
            console.error("Error fetching unsigned VB transactions: ", error);
        });
}

function populateVBTable() {
    const tableBody = document.getElementById("transferDetails tbody_vb");
    const row1 = document.createElement("tr");
    row1.innerHTML = ` 
  <tr>
                <th>Compte à débiter</th>
                <th>Bénéficiaire</th>
                <th>Montant</th>
                <th>Motif paiement</th>
                <th>Devise</th>
                <th>Date d'exécution</th>
                </tr>
                `;
    tableBody.appendChild(row1);

    fetchUnsignedVBTransactions().then((transactions) => {
        transactions.forEach((transaction) => {
            if (transaction && transaction.accountDebit) {
                const row = document.createElement("tr");

                row.innerHTML = `
          <td>${transaction.accountDebit.label}</td>
          <td>${transaction.beneficiary.label}</td>
          <td>${transaction.transferMoney}</td>
          <td>${transaction.reason}</td>
          <td>${transaction.devise}</td>
          <td>${transaction.date}</td>
          <td>
            <button class="signCACButton" data-vb-id="${transaction.vbId}">Signer</button>
          </td>
          <td>
            <button type="button" class="modifierbtn" data-vb-id="${transaction.vbId}">
              Supprimer
            </button>
          </td>
        `;

                tableBody.appendChild(row);
            } else {
                console.error('Transaction or transaction.accountDebit is null or undefined:', transaction);
            }
        });
    });
}

document.addEventListener("click", (event) => {
    if (event.target.classList.contains("signCACButton")) {
        const vbId = event.target.getAttribute("data-vb-id");
        const popup =document.getElementById("virementhistoriqueVVB");

        // Send a POST request to mark the VB transaction as signed
        fetch(`http://localhost:8082/vb/sign-vb/${vbId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.status === 200) {
                    // Transaction successfully signed
                    console.log("VB transaction signed successfully.");
                    const tableBody = document.getElementById("transferDetails tbody_vb");
                    tableBody.innerHTML = "";
                    populateVBTable();
                    popup.style.display="block";
                } else {
                    // Handle errors
                    console.error("Error signing VB transaction.");
                }
            })
            .catch((error) => {
                console.error("Error signing VB transaction: ", error);
            });
    }
});

// Call the populateVBTable function to initially populate the table
populateVBTable();

document.getElementById("refreshTableButton_vb").addEventListener("click", () => {
    const tableBody = document.getElementById("transferDetails tbody_vb");
    tableBody.innerHTML = "";
    populateVBTable();
});
/* ******************************************** signed (historique ) virement*****************************************/
function fetchsignedvbTransactions() {
    // Replace with your actual endpoint for fetching unsigned CAC transactions
    const fetchUrl = "http://localhost:8082/vb/get-signed-vb-transactions";

    return fetch(fetchUrl)
        .then((response) => {
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Failed to fetch signed vb transactions.");
            }
        })
        .catch((error) => {
            console.error("Error fetching signed vb transactions: ", error);
        });
}

// Function to populate the table with CAC transactions
function populatevbsignedTable() {
    const tableBody = document.getElementById("T-virementhistoriqueVVB");
    const row1 = document.createElement("tr");
    row1.innerHTML = ` 
                 <tr>
                <th>Compte à débiter</th>
                <th>Bénéficiaire</th>
                <th>Montant</th>
                <th>Motif paiement</th>
                <th>Devise</th>
                <th>Date d'exécution</th>
            </tr>
                `;
    tableBody.appendChild(row1);

    // Fetch unsigned CAC transactions and populate the table
    fetchsignedvbTransactions().then((transactions) => {
        transactions.forEach((transaction) => {
            const row = document.createElement("tr");
            row.innerHTML = `
          <td>${transaction.accountDebit.label}</td>
          <td>${transaction.beneficiary.label}</td>
          <td>${transaction.transferMoney}</td>
          <td>${transaction.reason}</td>
          <td>${transaction.devise}</td>
          <td>${transaction.date}</td>
        
          
        `;
            tableBody.appendChild(row);
        });
    });
}

// Call the populateCACTable function to initially populate the table
populatevbsignedTable();

document
    .getElementById("refreshTableButton_2")
    .addEventListener("click", () => {
        const tableBody = document.getElementById("T-virementhistoriqueVVB");
        tableBody.innerHTML = "";
        populatevbsignedTable();
    });
/* ***************************************CREAT gb******************************************/
function createBeneficiary() {
    const name = document.getElementById("Nom/RSVB_2").value;
    const rib = document.getElementById("RIB_2").value;
    const label = document.getElementById("libelléVB_2").value;
    const telephone = document.getElementById("telephoneVB_2").value;
    const email = document.getElementById("emailVB").value;


    const data = {
       name: name,
        rib:rib,
        label:label,
        telephone:telephone,
        email:email,
    };

    fetch(`http://localhost:8082/beneficiary/create-Beneficiary`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (response.status === 200) {
                console.log("Beneficiary created successfully");
                // Optionally, you can reset the form fields or perform any other actions here
            } else {
                console.error("Failed to create Beneficiary");
            }
        })
        .catch((error) => {
            console.error("Error creating Beneficiary: ", error);
        });

}


/* ********************************** this is for the check box of benef***********************************/
// fetch("http://localhost:8082/beneficiary/get-all-beneficiaries")
//   .then((response) => response.json())
//   .then((beneficiaries) => {
//
//     const beneficiaryListDiv_1 = document.getElementById("beneficiary-list_1");
//     const beneficiaryListDiv_2 = document.getElementById("beneficiary-list_2");
//
//               /* ***********************************************************/
//     beneficiaries.forEach((beneficiary) => {
//       const label = document.createElement("label");
//       label.classList.add("label-benef");
//
//       const input = document.createElement("input");
//       input.type = "checkbox";
//       input.name = "beneficiary";
//       input.value = beneficiary.label; // Use the beneficiary's label as the value
//
//       const text = document.createTextNode(beneficiary.label); // Use the beneficiary's label as the text
//
//       label.appendChild(input);
//       label.appendChild(text);
//
//       beneficiaryListDiv_1.appendChild(label);
//     });
//     beneficiaries.forEach((beneficiary) => {
//       const label = document.createElement("label");
//       label.classList.add("label-benef");
//
//       const input = document.createElement("input");
//       input.type = "checkbox";
//       input.name = "beneficiary";
//       input.value = beneficiary.label; // Use the beneficiary's label as the value
//
//       const text = document.createTextNode(beneficiary.label); // Use the beneficiary's label as the text
//
//       label.appendChild(input);
//       label.appendChild(text);
//
//       beneficiaryListDiv_2.appendChild(label);
//     });
//   })
//   .catch((error) => {
//     console.error("Error fetching beneficiaries: ", error);
//   });
/* **************************************************************************************/
fetch(`http://localhost:8082/beneficiary/get-all-beneficiaries`)
    .then((response) => response.json())
    .then((beneficiaries) => {
        const beneficiaryListDiv = document.getElementById("beneficiary-list");
        const beneficiaryListDiv_1 = document.getElementById("beneficiary-list_1");
        const beneficiaryListDiv_2 = document.getElementById("beneficiary-list_2");
        const beneficiaryListDiv_3 = document.getElementById("beneficiary-list_3");

        /* ***********************************************************/
        beneficiaries.forEach((beneficiarie) => {
            const option = document.createElement("option");
            option.textContent = beneficiarie.label;
            beneficiaryListDiv.appendChild(option);
        });
        beneficiaries.forEach((beneficiarie) => {
            const option = document.createElement("option");
            option.textContent = beneficiarie.label;
            beneficiaryListDiv_1.appendChild(option);
        });
        beneficiaries.forEach((beneficiarie) => {
            const option = document.createElement("option");
            option.textContent = beneficiarie.label;
            beneficiaryListDiv_2.appendChild(option);
        });
        beneficiaries.forEach((beneficiarie) => {
            const option = document.createElement("option");
            option.textContent = beneficiarie.label;
            beneficiaryListDiv_3.appendChild(option);
        });
    });