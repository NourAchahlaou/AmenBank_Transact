window.addEventListener('DOMContentLoaded', event => {

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
        const tableBody = document.getElementById("datatablesSimple");
        const row1 = document.createElement("tr");
        row1.innerHTML = ` 
                <tr>
                <th>Compte à débiter</th>
                <th>Compte à créditer</th>
                <th>Montant</th>
                <th>Motif paiement</th>
                <th>Devise</th>
                <th>Date d'exécution</th>
              </tr> 
                `;
        tableBody.appendChild(row1);
        // Fetch unsigned CAC transactions and populate the table
        fetchsignedCACTransactions()
            .then((transactions) => {
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

    document.getElementById("refreshTableButton_1").addEventListener("click", () => {
        const tableBody = document.getElementById("datatablesSimple");
        tableBody.innerHTML = "";
        populateCACsignedTable();
    });
});

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
    const tableBody = document.getElementById("datatablesSimplevb");
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
        const tableBody = document.getElementById("datatablesSimplevb");
        tableBody.innerHTML = "";
        populatevbsignedTable();
    });