const creditCard = document.querySelector("#creditCardNumberContainer")
const paypal = document.querySelector("#paypalUsernameContainer")
const selectPayment = document.querySelector("#paymentMethod")


function togglePaymentDetails() {
    let value = selectPayment.value;
    creditCard.classList.add("hide");
    paypal.classList.add("hide");

    creditCard.required = false;
    paypal.required = false;

    
    if (value == 'creditCard') {
        creditCard.classList.remove = "hide";

    }

    if (value == 'paypal') {
        creditCard.classList.remove = "hide";

    }
}