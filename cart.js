document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    const checkoutButton = document.getElementById("checkout-button");

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        cartContainer.innerHTML = "";
        let total = 0;

        cart.forEach((item, index) => {
            const itemTotal = item.price * item.quantity;
            total += itemTotal;

            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td><img src="${item.image}" alt="${item.name}" class="cart-image"></td>
                <td>${item.name}</td>
                <td><input type="number" min="1" value="${item.quantity}" data-index="${index}" class="update-quantity"></td>
                <td>$${item.price.toFixed(2)}</td>
                <td>$${itemTotal.toFixed(2)}</td>
                <td><button class="remove-item" data-index="${index}">Remove</button></td>
            `;
            cartContainer.appendChild(row);
        });

        cartTotal.textContent = total.toFixed(2);
    }

    function updateQuantity(event) {
        if (!event.target.classList.contains("update-quantity")) return;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = event.target.dataset.index;
        cart[index].quantity = parseInt(event.target.value);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    function removeItem(event) {
        if (!event.target.classList.contains("remove-item")) return;
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        const index = event.target.dataset.index;
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        loadCart();
    }

    

    cartContainer.addEventListener("input", updateQuantity);
    cartContainer.addEventListener("click", removeItem);

    checkoutButton.addEventListener("click", function () {
        window.location.href = "checkout.html";
    });

    loadCart();

    

    
});
