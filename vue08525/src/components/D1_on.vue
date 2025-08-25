<template>
    <div>
        <h2>예제5. v-on</h2>
        <div class="sec1">
            <div id="light">
                <div v-show="lightOn"></div>
                <img src="../../img_lightBulb.svg" alt="">
            </div>
            <button @click="lightOn =! lightOn">Switch Light</button>
        </div>
        <div class="sec2">
            <input type="text" v-on:input = "inpCount++" placeholder="Start writing...">
            <p>{{ 'Input Event Occured :' + inpCount }}</p>
        </div>
        <div class="sec3">
            <div v-on:mousemove="colorVal = Math.floor(Math.random()*360)" v-bind:style="{backgroundColor: `hsl(${colorVal},80%, 80%)`}">
                <p>
                    <span>BackgroundColor : rgb(<strong>{{colorVal}}</strong>,80%, 80%)</span>
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const lightOn= ref(false);
const inpCount = ref(0);
const colorVal = ref(50);

</script>
<style>
img{width:100%; height:100%; position: relative;}
#light{position:relative; width:150px; height:150px; margin:auto;}
#light div{position:absolute; top:10%; left:10%; width:80%; height:80%; border-radius:50%; background-color:yellow}
.sec3 div{width:200px; height:80px; margin:auto; border:1px solid black;}
</style>