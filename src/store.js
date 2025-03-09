import { reactive } from 'vue';

const state = reactive({
    cart: [],
});

export function addToCart(product) {
    const existingProduct = state.cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity++;
    } else {
        state.cart.push({ ...product, quantity: 1 });
    }
}

export function removeFromCart(productId) {
    const index = state.cart.findIndex(item => item.id === productId);
    if (index !== -1) {
        state.cart.splice(index, 1);
    }
}

export function getCart() {
    return state.cart;
}