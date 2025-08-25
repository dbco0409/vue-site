<script>
import '../../../css/index.css';
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
            <h1>모두의호텔<br/><span>The EVERY HOTEL</span></h1>
            <div class="lang">
                    <a href=""><img src="../../images/common/lang_koro.png" alt=""></a>
                    <a href=""><img src="../../images/common/lang_en.png" alt=""></a>
                    <a href=""><img src="../../images/common/lang_ch.png" alt=""></a>
                    <a href=""><img src="../../images/common/lang_jp.png" alt=""></a>
                </div>
            <div class="boxMenu">
                <div class="menu">
                    <ul>
                        <li><button><span class="one"><i class="fa-solid fa-right-to-bracket"></i></span>체크인<span class="en">CHECK IN</span></button></li>
                        <li><button><span class="one"><i class="fa-solid fa-arrow-right-from-bracket"></i></span>체크아웃<span class="en">CHECK OUT</span></button></li>
                        <li><button><span class="one"><i class="fa-solid fa-key"></i></span>빠른예약<span class="en">Quick Reservation</span></button></li>
                        <li><button><span class="one"><i class="fa-solid fa-magnifying-glass"></i></span>예약조회<span class="en">Reservation List</span></button></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>