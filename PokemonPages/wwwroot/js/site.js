// this function takes the input from the calculator and gives a rate. also further validates inputs

$(document).ready(function () {
    $("#btnPrice").click(function (event) {
        event.preventDefault(); // Prevent form submission
        
        let hoursInput = $("#txtHours")[0]; // Get the raw input element
        let hours = parseFloat(hoursInput.value);
        let rate = parseFloat($("#txtRate").val());

        // If the input is invalid, show the browser's built-in validation message
        if (!hoursInput.checkValidity()) {
            hoursInput.reportValidity();
            return;
        }

        // Validate manually if it's a positive number
        if (!isNaN(hours) && hours > 0) {
            let total = hours * rate;
            $("#txtTotal").val(total.toFixed(2)); // Show result with 2 decimal places
        } else {
            $("#txtTotal").val("Invalid input");
        }
    });
});
