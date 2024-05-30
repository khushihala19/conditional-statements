function compare() {
    // Get the values from the input fields
    let australia = parseInt(document.getElementById('australia').value);
    let england = parseInt(document.getElementById('england').value);

    // Determine the appropriate message
    let message;
    if (australia > england) {
        message = "Australia";
    } else if (australia < england) {
        message = "England";
    } else if (australia === england) {
        message = "Tie";
    }
    
// Display the result
document.getElementById('result').innerText = message;
}