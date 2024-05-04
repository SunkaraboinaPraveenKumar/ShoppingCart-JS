document.getElementById('checkoutForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the usual way

    const formData = {
        fullname: document.getElementById('fullname').value,
        address: document.getElementById('address').value,
        pincode: document.getElementById('pincode').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
    };

    console.log('Form Data:', formData);

    // Here, you might send this data to a server or process it further
    alert("Order Submitted!");

    // Redirect to the payment page
    window.location.href = 'payment.html'; // Assuming 'payment.html' is your payment page
});
