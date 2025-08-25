<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';

// import required modules
import { Autoplay } from 'swiper/modules';

export default {
components: {
    Swiper,
    SwiperSlide,
},
setup() {
    return {
    modules: [Autoplay],
    };
},
};
</script>

<script setup>
import '../../css/index.css';
import CheckIn from './sub/CheckIn.vue';
import CheckOut from './sub/CheckOut.vue';
import Reserve from './sub/Reserve.vue';
import ReserveList from './sub/ReserveList.vue';

import { ref } from 'vue';

const pop1 = ref(false);
const pop2 = ref(false);
const pop3 = ref(false);
const pop4 = ref(false);
</script>

<template>
    <section id="main01">
        <div class="bg"></div>

        <swiper
            :spaceBetween="30"
            :centeredSlides="true"
            :autoplay="{
            delay: 3000,
            disableOnInteraction: false,
            }"
            :loop="true"
            :modules="modules"
            class="main_slider swiper-container"
        >
            <swiper-slide><img src="../../images/main/main_visual01.jpg"/></swiper-slide>
            <swiper-slide><img src="../../images/main/main_visual02.jpg"/></swiper-slide>
            <swiper-slide><img src="../../images/main/main_visual03.jpg"/></swiper-slide>
            <swiper-slide><img src="../../images/main/main_visual04.jpg"/></swiper-slide>
        </swiper>
        
        <div class="main_txt">
            <h1>EVERY HOTEL<br/><span>WELCOME TO HOTEL</span></h1>
            <div class="lang">
                <router-link to="/">
                    <img src="../../images/common/lang_ko.png" alt="한국어" />
                </router-link>
                <router-link to="/en">
                    <img src="../../images/common/lang_enro.png" alt="English" />
                </router-link>
                <router-link to="/zh">
                    <img src="../../images/common/lang_ch.png" alt="中文" />
                </router-link>
                <router-link to="/ja">
                    <img src="../../images/common/lang_jp.png" alt="日本語" />
                </router-link>
            </div>

            <div class="pop" v-show="pop1">
                <h4>체크인</h4>
                <button @click="pop1 = false" class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
                <div class="inner">
                    <CheckIn/>
                </div>
            </div>
            <div class="pop" v-show="pop2">
                <h4>체크아웃</h4>
                <button @click="pop2 = false" class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
                <div class="inner">
                    <CheckOut/>
                </div>
            </div>
            <div class="pop" v-show="pop3">
                <h4>빠른예약</h4>
                <button @click="pop3 = false" class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
                <div class="inner">
                    <Reserve/>
                </div>
            </div>
            <div class="pop" v-show="pop4">
                <h4>예약조회</h4>
                <button @click="pop4 = false" class="closeBtn"><i class="fa-solid fa-xmark"></i></button>
                <div class="inner">
                    <ReserveList/>
                </div>
            </div>

            <div class="boxMenu">
                <div class="menu">
                    <ul>
                        <li><button @click="pop1 = true"><span class="one"><i class="fa-solid fa-right-to-bracket"></i></span>체크인<span class="en">CHECK IN</span></button></li>
                        <li><button @click="pop2 = true"><span class="one"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>체크아웃<span class="en">CHECK OUT</span></button></li>
                        <li><button @click="pop3 = true"><span class="one"><i class="fa-solid fa-key"></i></span>빠른예약<span class="en">Quick Reservation</span></button></li>
                        <li><button @click="pop4 = true"><span class="one"><i class="fa-solid fa-magnifying-glass"></i></span>예약조회<span class="en">Reservation List</span></button></li>
                    </ul>
                </div>
            </div>
        </div>

    </section>
</template>