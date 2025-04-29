document.addEventListener("DOMContentLoaded", function () {
    const orderSummary = document.getElementById("order-summary");
    const checkoutTotal = document.getElementById("checkout-total");
    const checkoutForm = document.getElementById("checkout-form");

    function loadCheckout() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        orderSummary.innerHTML = "";
        let total = 0;

        cart.forEach(item => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            orderSummary.innerHTML += `
                <div class="order-item">
                    <h4>${item.name}</h4>
                    <p>Price: $${item.price} x ${item.quantity}</p>
                    <p>Subtotal: $${itemTotal}</p>
                </div>
            `;
        });

        checkoutTotal.textContent = total.toFixed(2);
    }

    checkoutForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const address = document.getElementById("address").value;

        if (!name || !email || !address) {
            alert("Please fill in all details.");
            return;
        }

        alert(`Thank you, ${name}! Your order has been placed.`);
        localStorage.removeItem("cart"); // Clear the cart after checkout
        window.location.href = "index.html"; // Redirect to the products page
    });

    loadCheckout();
});
