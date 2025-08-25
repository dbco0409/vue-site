<template>
    <div>
        <h2>예제1.v-bind</h2>
        <div class="bind">
            <!-- v-bind:style 사용 -->
            <div v-bind:style="{fontSize: size2}">너는 V-bind:글자값 속성이야.</div>
            <div v-bind:style="{fontSize: size}">The browser finds the 'src' attribute value from the Vue instance with the use of 'v-bind'.</div>
            <div v-bind:style="{'font-size':size3}">너는 v-bind:css 글자크기값이야.</div>

            <!-- 이미지 Import 사용-->
            <img v-bind:src="imgSrc" alt="이미지 Import 사용"/>

            <div v-bind:style="{backgroundColor: `rgb(${bgVal}, 100,100)`, color:'white'}">백그라운드 색상값을 변수로 적용</div>

            <div v-bind:style="{color:(isImportant === true)? 'red':'black'}">조건에 달라지는 백그라운드 색상</div>
            <button @click="isImportant = true">빨간색</button>
            <button @click="isImportant = false">검은색</button>

            <div v-bind:class="className">클래스 바인드</div>

            <div v-bind:class="{imgClass:false}">클래스 Important 속성 여부</div>

            <div v-bind:class="{imgClass:isImportant2}">클래스 Important 속성 여부</div>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
import imgSrc from '../../img_beach3.jpg';
const size = ref("20px");
const size2 = ref(30+"px");
const size3 = ref("16px");
const bgVal = ref("80");
const isImportant = ref(true);
const isImportant2 = ref(true);
const className = ref("imgClass");
</script>
<style scoped>
.bind{
    border:1px dashed black;
    padding:10px;
    margin:auto;
    width: 250px;
}
.bind img{
    width: 100%;
}
.imgClass{
    background-color: lightyellow;
    border:2px dashed rebeccapurple;
}
</style>