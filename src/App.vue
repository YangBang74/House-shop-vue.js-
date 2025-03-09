<script setup>
import { ref } from 'vue';
import Menu from './components/Header.vue'
import Products from './components/Tabs.vue'; 

</script>

<template>
    <div class="hero">
        <div class="container">
            <div class="hero__body">
                <div class="hero__picture">
                    <img src="/hero_layer.png" alt="">
                </div>
                <div class="hero__titles">
                    <h1>Реплики картин от <span>Ink. House</span></h1>
                    <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                    <a href="#" class="button">Продукция</a>
                </div>                    
            </div>                
        </div>
    </div>
    <Products id="products"/>
    <div class="promo" id="news">
            <div class="container">
                <div class="promo__body">
                    <div class="promo__aitems">
                        <div class="promo__aitems-head">
                            <img src="/Star 2.svg" alt="">
                            <h3>Новая коллекция французских авторов</h3>
                        </div>
                        <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p> 
                        <p>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.
                        </p>  
                        <div class="promo__button">
                            <a href="#" class="button">Ознакомиться</a>
                        </div>                                              
                    </div>                    
                </div>                
            </div>
    </div>
    <div class="comand" id="us">
            <div class="container">
                <div class="comand__body">
                    <div class="comand__body-pic">
                        <img src="/comand_pic.png" alt="">
                    </div>
                    <div class="comand__body-title">
                        <h5>Наша команда</h5>
                        <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                        <nav class="comand__body-guys">
                            <a href="#">
                                <img src="/comand1.png" alt="">
                            </a>
                            <a href="#">
                                <img src="/comand2.png" alt="">
                            </a>
                            <a href="#">
                                <img src="/comand3.png" alt="">
                            </a>
                        </nav>  
                    </div>                  
                </div>                
            </div>
    </div>
    <footer class="footer">
            <div class="container">
                <div class="footer__fuck">
                    <div class="footer__head">
                        <div class="footer__logo">
                            <img src="/logo.svg" alt="">
                        </div>
                        <div class="footer__contact">
                            <a href="tel:+7 (999) 543-54-54">+7 (999) 543-54-54</a>
                            <p>Мастерская</p>
                        </div>                    
                    </div>
                    <div class="footer__block">
                        <div class="footer__aitems">
                            <div class="footer__aitem">
                                <p>Репродукции</p>
                                <nav class="footer__links">
                                    <a href="#">Франция</a>
                                    <a href="#">Германия</a>
                                    <a href="#">Англия</a>
                                </nav>                        
                            </div>
                            <div class="footer__aitem">
                                <p>Новинки</p>
                                <nav class="footer__links">
                                    <a href="#">2025</a>
                                    <a href="#">2024</a>
                                    <a href="#">2023</a>
                                    <a href="#">2022</a>
                                </nav>                        
                            </div>
                            <div class="footer__aitem">
                                <p>О нас</p>
                                <nav class="footer__links">
                                    <a href="#">Художники</a>
                                    <a href="#">Менеджеры</a>
                                </nav>                        
                            </div>
                        </div>
                        <div class="footer__copy">
                            <div class="soical">
                                <img src="/fcbook.svg" alt="">
                                <img src="/ins.svg" alt="">
                                <img src="/ytbe.svg" alt="">
                            </div>
                            <div class="copy">
                                <p>Ink. House ®</p>
                                <p>All rights reserved</p>
                            </div>                    
                        </div>
                    </div>
                </div> 
            </div>
    </footer>
</template>

<style scoped>
   
</style>
