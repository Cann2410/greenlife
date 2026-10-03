/* ==================================================
   GREENLIFE - JAVASCRIPT
================================================== */


/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("active");

});


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("active");

    });

});


/* ================= SHOPPING CART ================= */

const addButtons = document.querySelectorAll(".add-cart");

const cartButton = document.getElementById("cartButton");

const cartCount = document.getElementById("cartCount");

const cartModal = document.getElementById("cartModal");

const closeModal = document.getElementById("closeModal");

const cartItems = document.getElementById("cartItems");

const cartTotal = document.getElementById("cartTotal");

const checkoutButton =
    document.getElementById("checkoutButton");


let cart = [];


/* Add product to cart */

addButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productName =
            button.getAttribute("data-name");

        cart.push(productName);

        updateCart();

        button.textContent = "Added ✓";

        button.disabled = true;

        setTimeout(function () {

            button.textContent = "Add to Cart";

            button.disabled = false;

        }, 1200);

    });

});


/* Update cart */

function updateCart() {

    cartCount.textContent = cart.length;

    cartTotal.textContent = cart.length;

    if (cart.length === 0) {

        cartItems.innerHTML =
            '<p class="empty-cart">Your cart is empty.</p>';

        return;
    }


    cartItems.innerHTML = "";


    cart.forEach(function (product, index) {

        const item = document.createElement("div");

        item.className = "cart-item";

        item.innerHTML = `
            <span>${product}</span>

            <button
                class="remove-item"
                data-index="${index}">
                Remove
            </button>
        `;

        cartItems.appendChild(item);

    });


    const removeButtons =
        document.querySelectorAll(".remove-item");


    removeButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const index =
                Number(button.getAttribute("data-index"));

            cart.splice(index, 1);

            updateCart();

        });

    });

}


/* ================= OPEN CART ================= */

cartButton.addEventListener("click", function () {

    cartModal.classList.add("show");

});


/* ================= CLOSE CART ================= */

closeModal.addEventListener("click", function () {

    cartModal.classList.remove("show");

});


/* Close modal when clicking outside */

cartModal.addEventListener("click", function (event) {

    if (event.target === cartModal) {

        cartModal.classList.remove("show");

    }

});


/* ================= CHECKOUT ================= */

checkoutButton.addEventListener("click", function () {

    if (cart.length === 0) {

        alert("Your cart is empty. Please add a plant first.");

        return;

    }


    alert(
        "Thank you for your order! " +
        "We will contact you soon."
    );

});


/* ================= CONTACT BUTTON ================= */

const contactButton =
    document.getElementById("contactButton");


contactButton.addEventListener("click", function () {

    alert(
        "Thank you for contacting GreenLife! " +
        "We will get back to you soon."
    );

});


/* ================= INITIAL CART ================= */

updateCart();
