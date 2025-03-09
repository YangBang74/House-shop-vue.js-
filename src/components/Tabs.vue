<template>
  <Header :cartCount="cart.length" @viewCart="toggleCart" />
  <div class="products">    
      <div v-if="!viewCart"></div>
        <div class="tabs">
          <button 
            v-for="tab in tabs" 
            :key="tab.name" 
            :class="{ active: activeTab === tab.name }" 
            @click="activeTab = tab.name"
          >
            {{ tab.label }}
          </button>
      </div>
      <div class="tab-content">
        <div v-if="activeTab === 'france'">
          <ProductList :products="france" :addToCart="addToCart" />
        </div>
        <div v-if="activeTab === 'germany'">
          <ProductList :products="germany" :addToCart="addToCart" />
        </div>
        <div v-if="activeTab === 'england'">
          <ProductList :products="england" :addToCart="addToCart" />
        </div>
      </div>
  </div>
      <div v-if="viewCart" class="cart-overlay">
        <div class="cart-content">
          <h2>Корзина</h2>
          <div v-if="cart.length === 0" class="cart-not" >
            <p>Корзина пуста.</p>
            <button @click="toggleCart" class='cart-close'>Закрыть</button>
          </div>
          <div v-else class="cart-buy">
            <ul>
              <li v-for="item in cart" :key="item.id">
                <p>{{ item.name }}<span></span>{{ item.price }} руб.</p>
                <button @click="removeFromCart(item)" class="cart-dell"><span></span><span></span></button> <!-- Кнопка удаления -->
              </li>
            </ul>
            <h3>Общая стоимость: {{ totalPrice }} руб.</h3>
            <button @click="checkout" class="cart-buy-btn">Оформить заказ</button>
            <button @click="toggleCart" class='cart-close'>Закрыть</button>
          </div>
        </div>
      </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import ProductList from './ProductList.vue'; // Импортируем компонент списка товаров
import Header from './Header.vue';
// Определяем табы
const tabs = [
  { name: 'france', label: 'Франция' },
  { name: 'germany', label: 'Германия' },
  { name: 'england', label: 'Англия' }
];

// Переменная для хранения активного таба
const activeTab = ref(tabs[0].name);
const viewCart = ref(false);
// Данные с товарами для каждого таба
const france = [
  { id: 1, image: '/france/france-1.jpg', autor: 'Марсель Руссо', 
  name: 'Охота Амура', material: 'Холст, масло (50х80)', price: 14500 },
  { id: 2, image: '/france/france-2.jpg', autor: 'Анри Селин', 
  name: 'Дама с собачкой', material: 'Акрил, бумага (50х80)', price: 16500 },
  { id: 3, image: '/france/france-3.jpg', autor: 'Франсуа Дюпон', 
  name: 'Процедура', material: 'Цветная литография (40х60)', price: 20000 },
  { id: 4, image: '/france/france-4.jpg', autor: 'Луи Детуш', 
  name: 'Роза', material: 'Бумага, акрил (50х80)', price: 12000},
  { id: 5, image: '/france/france-5.jpg', autor: 'Франсуа Дюпон', 
  name: 'Птичья трапеза', material: 'Цветная литография (40х60)', price: 22500 },
  { id: 6, image: '/france/france-6.jpg', autor: 'Пьер Моранж', 
  name: 'Пейзаж с рыбой', material: 'Цветная литография (40х60)', 
  price: 20000},
];
const germany = [
  { id: 1, image: '/germany/germany_1.jpg', autor: 'Курт Вернер', 
  name: 'Над городом', material: 'Цветная литография (40х60)', price: 16000},
  { id: 2, image: '/germany/germany_2.jpg', autor: 'Макс Рихтер', 
  name: 'Птенцы', material: 'Холст, масло (50х80)', price: 14500},
  { id: 3, image: '/germany/germany_3.jpg', autor: 'Мартин Майер', 
  name: 'Среди листьев', material: 'Цветная литография (40х60)', price: 20000 },
  { id: 4, image: '/germany/germany_4.jpg', autor: 'Герман Беккер', 
  name: 'Яркая птица', material: 'Цветная литография (40х60)', price: 13000},
  { id: 5, image: '/germany/germany_5.jpg', autor: 'Мартин Майер', 
  name: 'Среди листьев', material: 'Бумага, акрил (50х80)', price: 20000},
  { id: 6, image: '/germany/germany_6.jpg', autor: 'Герман Беккер', 
  name: 'Яркая птица', material: 'Бумага, акрил (50х80)', price: 13000},
];
const england = [
  { id: 1, image: '/england/england_1.jpg', autor: 'Пол Смит', 
  name: 'Дикий зверь', material: 'Акварель, бумага (50х80)', price: 19500},
  { id: 2, image: '/england/england_2.jpg', autor: 'Джон Уайт', 
  name: 'Скалистый берег', material: 'Цветная литография (40х60)', price: 17500},
  { id: 3, image: '/england/england_3.jpg', autor: 'Джим Уотсон', 
  name: 'Река и горы', material: 'Акварель, бумага (50х80)', price: 20500},
  { id: 4, image: '/england/england_4.jpg', autor: 'Юджин Зиллион', 
  name: 'Белый попугай', material: 'Цветная литография (40х60)', price: 15500},
  { id: 5, image: '/england/england_5.jpg', autor: 'Эрик Гиллман', 
  name: 'Ночная рыба', material: 'Бумага, акрил (50х80)', price: 12500},
  { id: 6, image: '/england/england_6.jpg', autor: 'Альфред Барр', 
  name: 'Рыжий кот', material: 'Цветная литография (40х60)', price: 21000},
];

const cart = ref([]);

// Функция для добавления товара в корзину
function addToCart(product) {
  cart.value.push(product);  
  alert(`${product.name} добавлен в корзину!`);   
 
}


// Вычисленная общая стоимость
const totalPrice = computed(() => {
  return  cart.value.reduce((total, item) => total + item.price, 0);
});
// Функция оформления заказа
function checkout() {

  if (cart.value.length === 0) {
    alert("Корзина пуста!");
    return;
  }
  alert("Спасибо за заказ!");
  cart.value.length = 0; // Здесь можно добавить дополнительную логику для оформления заказа
}
// Функция для переключения состояния корзины
function toggleCart() {
  viewCart.value = !viewCart.value;
  document.body.classList.toggle('click');
  
}
function removeFromCart(item) {
  cart.value = cart.value.filter(cartItem => cartItem.id !== item.id);
  alert(`${item.name} удален из корзины!`);
}

</script>

<style>

.products {
  padding: 0px 100px 50px;
}
.tabs {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.tabs button {
  background: #D4E8D9;
  padding: 10px 20px;
  border-radius: 50px;
  background: #D4E8D9;
  color: #2C2D35;
  font-size: 20px;
  line-height: 23.48px;
  transition: 0.5s;
}
.tabs button.active {
  color: #F4F6F5;
  background: #376B44;
}
.tab-content {
  margin-top: 20px;
}
/* Стили для корзины на весь экран */
.cart-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); /* Затемненный фон */
  color: rgb(0, 0, 0); /* Цвет текста */
  display: flex;
  justify-content: flex-end;
  align-items: center;
  z-index: 1000; /* Поверх остальных элементов */
}
body.click .cart-content {
  right: 0;
}
.cart-close {
  padding: 10px 20px;
  border-radius: 20px;
  position: absolute;
  top: 25px;
  right: 20px;
  transition: 0.3s;
}
.cart-close:hover {
  background: rgb(65, 65, 65);
  color: #fff;
}
.cart-content {
  position: relative;
  top: 0;
  right: -100%;
  background-color: #ffffff; /* Цвет фона для корзины */
  padding: 30px;
  min-width: 40%;
  min-height: 100vh;
  border-radius: 8px 0 0 8px; /* Закругленные углы */
  text-align: center;
  transition: 0.3s;
  & h2 {
    text-align: left;
    font-weight: 600;
    font-size: 20px;
  }
  & .cart-not p {
    padding: 150px 0;
    position: relative;
    font-weight: 600;
    font-size: 25px;
  }
}
.cart-buy {
  padding: 50px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
  & .cart-buy-btn {
    display: block;
    width: 100%;
    padding: 20px;
    position: relative;
    align-self: end;
    font-weight: 600;
    font-size: 15px;
    border-radius: 5px;    
    color: #000000;
    transition: 0.3s;
  }
  & .cart-buy-btn:hover {
    background: #24ec56;
  }
  & li {
    padding: 5px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    font-weight: 500;
  }
  & p span {
    display: inline-block;
    margin: 0 2px;
    width: 40px;
    border-bottom: 1px dashed #000000;
  }
  & h3 {
    text-align: left;
    font-weight: 600;
    font-size: 16px;
  }
}
.cart-dell {
  padding: 10px 5px;
}
.cart-dell:hover {
  background: #ff5b5b;
}
.cart-dell span {
  display: block;
  height: 1px;
  width: 15px;
  background: #000000;
}
.cart-dell span:nth-child(1) {
  transform: rotate(45deg);
  translate: 0px 1px;
}
.cart-dell span:nth-child(2) {
  transform: rotate(-45deg);
}
@media (max-width: 1024px) {
    .products {
        padding: 0 50px 50px;
    }
}
@media (max-width: 769px) {
  .products {
        padding: 0px 30px 50px;
    }
}
@media (max-width: 425px) {
  .products {
        padding: 50px 20px;
    }
}
    

</style>