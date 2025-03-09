<template>
    <div class="product-list">
        <div v-for="product in products" :key="product.id" class="product">
            <img :src="product.image" :alt="product.name" class="product-image" />
            <h6>{{ product.autor }}</h6>
            <h5>{{ product.name }}</h5>
            <p>{{ product.material }}</p>
            <p class="price">{{ product.price }} руб.</p>

            <button class="buy" @click="addToCart(product)">В корзину</button>
        </div>
    </div>
  </template>
  
<script setup>
import { defineProps } from 'vue';
const { products, addToCart } = defineProps(['products', 'addToCart']);

</script>

<style>
    .product-list {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
        width: 100%;
    }
    .product {
        background: #E1EDE6;
        border-radius: 5px;
        padding: 20px;
        display: grid;
        grid-template: 1fr 1fr 1fr 1fr 1r 1fr 1fr 1fr/1fr;
        align-items: stretch;
        width: 31%;
        & img {
            width: 100%;
        }
        & h6 {
            padding: 10px 0;
            color: #86928B;
            font-size: 18px;
            line-height: 21.13px;
        }
        & h5 {
            font-size: 30px;
            line-height: 35.22px;
        }
        & p {
            padding: 5px 0;
            font-size: 18px;
            line-height: 21.13px
        }
        & .price {
            padding: 30px 0 20px;
            font-size: 24px;
            line-height: 28.18px;
            color: #598D66;
        }
        & .buy {
            display: block;
            padding: 20px 0;
            text-align: center;
            color: #598D66;
            border: 1px solid #598D66;
            font-size: 20px;
            line-height: 23.48px;
            position: relative;
            align-content: end;
            transition: 0.3s;
        }
        & .buy:hover{
            background: #598D66;
            color: #fff;
        }
    }
    @media (max-width: 769px) {
        .product {
            width: 48%;
        }
    }
    @media (max-width: 590px) {
        .product {
            width: 46%;
        }
    }
    @media (max-width: 590px) {
        .product {
            width: 96%;
        }
    }
</style>