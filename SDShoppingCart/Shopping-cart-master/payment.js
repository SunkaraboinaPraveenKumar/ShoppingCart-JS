function submitPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (selectedPayment) {
        alert('You selected: ' + selectedPayment.value);
        // Here you might redirect to a specific payment processor or process the payment
    } else {
        alert('Please select a payment method.');
    }
}    function submitPayment() {
    const selectedPayment = document.querySelector('input[name="payment"]:checked');
    
    if (selectedPayment) {
        const totalAmount = getTotalCartAmount(); // Get the total cart amount
        
        switch (selectedPayment.value) {
            case 'credit-card':
                window.location.href = `credit-card.html?amount=${totalAmount}`;
                break;
            case 'debit-card':
                window.location.href = `debit-card.html?amount=${totalAmount}`;
                break;
            case 'upi':
                window.location.href = `upi.html?amount=${totalAmount}`;
                break;
            case 'cash-on-delivery':
                window.location.href = `cash-on-delivery.html?amount=${totalAmount}`;
                break;
            default:
                alert('Invalid payment method.');
                break;
        }
    } else {
        alert('Please select a payment method.');
    }
}
