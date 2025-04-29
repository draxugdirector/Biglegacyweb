
// Select all images inside the image-container
const images = document.querySelectorAll('.image-container img');

// Create modal structure
const modal = document.createElement('div');
modal.classList.add('image-modal');
modal.innerHTML = `
    <span class="close-modal">&times;</span>
    <img class="modal-image" src="" alt="">
`;
document.body.appendChild(modal);

const modalImage = modal.querySelector('.modal-image');
const closeModal = modal.querySelector('.close-modal');

// Show enlarged image when clicked
images.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        modalImage.src = img.src;
        document.body.classList.add('modal-open');
    });
});

// Close modal on button click
closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
});

// Close modal if clicked outside image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        document.body.classList.aremove('modal-open');
    }
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");

    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const productId = this.getAttribute("data-id");
            const productName = this.getAttribute("data-name");
            const productPrice = parseFloat(this.getAttribute("data-price"));

            let cart = JSON.parse(localStorage.getItem("cart")) || [];
            let existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
            }

            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${productName} added to cart!`);
        });
    });

    const sr = ScrollReveal({
        origin: 'top',
        distance: '60px',
        duration: 2000,
        delay: 200,
    //     reset: true
    });

    
