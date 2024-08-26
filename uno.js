let cart = [];
let totalPrice = 0;

function addToCart(product, price) {
    cart.push({ product, price });
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.product} - S/. ${item.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    totalPrice = cart.reduce((total, item) => total + item.price, 0);
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function checkout() {
    if (cart.length > 0) {
        alert(`Compra realizada! Total: S/. ${totalPrice.toFixed(2)}`);
        cart = [];
        totalPrice = 0;
        updateCart();
    } else {
        alert('El carrito está vacío.');
    }
}
