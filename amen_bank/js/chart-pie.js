// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


function fetchTotalTransferredMoney() {
    fetch("http://localhost:8082/cac/total-transferred-money")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Failed to fetch total transferred money.");
            }
        })
        .then((totalTransferredMoney) => {
            // Update the pie chart data with the retrieved totals
            updatePieChart(totalTransferredMoney);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// Function to update the pie chart data with the retrieved totals
function updatePieChart(totalTransferredMoney) {
    var ctx = document.getElementById("myPieChart");
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: {
            labels: Object.keys(totalTransferredMoney),
            datasets: [{
                data: Object.values(totalTransferredMoney),
                backgroundColor: ['#007bff', '#dc3545'],
            }],
        },
    });
}

// Call the fetchTotalTransferredMoney function when the page loads
document.addEventListener("DOMContentLoaded", function () {
    fetchTotalTransferredMoney();
});