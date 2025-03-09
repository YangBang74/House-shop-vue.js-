<script setup>
    import { ref, onMounted, onUnmounted, defineProps} from 'vue';

    
    const menuVisible = ref(false);
    const toggleMenu = () => {
    document.body.classList.toggle('click');
    menuVisible.value = !menuVisible.value;    
    };
    const props = defineProps({
      cartCount: Number // Количество товаров передается через пропс
    });
</script>
<template>
   <header class="header">
        <div class="container">
            <div class="header__body">
                <div class="header__logo">
                   <a href="#"><img src="/logo.svg" alt=""></a>
                </div>
                <div class="header__fuck">
                    <div class="burger-menu">
                        <button @click="toggleMenu" class="burger-button">
                            <div>
                                <span class="burger__line"></span>
                                <span class="burger__line"></span>
                                <span class="burger__line"></span>
                            </div>
                        </button>
                        <transition name="slide">
                            <nav class="menu" v-if="menuVisible">
                                <ul>
                                    <li><a href="#products">Репродукции</a></li>
                                    <li><a href="#news">Новинки</a></li>
                                    <li><a href="#us">О нас</a></li>
                                </ul>
                            </nav>
                        </transition>
                    </div>
                    <nav class="header__menu">
                        <ul class="header__list">
                            <il><a href="#" class="header__link">Репродукции</a></il>
                            <il><a href="#" class="header__link">Новинки</a></il>
                            <il><a href="#" class="header__link">О нас</a></il>
                        </ul>
                    </nav>
                    <div class="cart" @click="$emit('viewCart')">
                      <img src="/cart.svg" alt="Корзина" />
                      <span class="cart-count" v-if="cartCount > 0">{{ cartCount }}</span>
                      <span class="cart-count" v-else style="display: none;">0</span>
                    </div>
                </div>
            </div>
          </div>
    </header>
</template>
<style scoped>

.burger-menu {
  display: none;
}
.burger__line{
  display: block;
  background: #000;
  margin: 5px 0 0;
  height: 3px;
  width: 30px;
  transition: 0.3s;
}
body.click .burger__line:nth-child(1) {
  transform: rotate(45deg);
  /* translate: 7px; */
}
body.click .burger__line:nth-child(2) {
  display: none;
}
body.click .burger__line:nth-child(3) {
  transform: rotate(-45deg);
  translate: 0px -8.5px;
}
.burger-button {
  background: none;
  border: none;
  font-size: 2em;
  cursor: pointer;
}
.menu {
  background-color: #f0f0f0;
  padding: 10px;
  position: absolute;
  top: 44px;
  left: 0;
  width: 100%;
  height: 100vh;
 /* Начальное положение вне экрана */
  transition: transform 0.3s ease-in-out; /* Анимация */
}
.menu.slide-enter-active,
.menu.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.menu.slide-enter-from,
.menu.slide-leave-to {
  transform: translateX(100%);
}
.menu.slide-enter-to,
.menu.slide-leave-from {
  transform: translateX(0%);
}
.menu li a {
  display: block;
  padding: 20px 10px;
  color: #000;
  font-size: 20px;
  font-weight: 500;
}
.cart {
  position: relative;
  cursor: pointer;
}
.cart-count {
  position: absolute;
  bottom: -2px;
  right: -10px;
  width: 15px;
  height: 15px;
  background-color: rgb(255, 0, 0);
  color: rgb(255, 255, 255);
  border-radius: 50%;
  padding: 2px 4.5px;
  font-size: 12px;
}
@media (max-width: 425px) {
  .burger-menu {
    display: block;
  }
}
</style>
