<script setup>
import { ref } from 'vue';
const typewritesInStock = ref(true);
const typewriterCount = ref(4);
const text = ref("I love pizza and pasta");
</script>

<template>
    <div>
        <h2>예제2. v-if</h2>

        <div id="myApp">
            <p v-if="typewritesInStock">
                재고 있음
            </p>
            <p v-else>
                재고 없음
            </p>
            <button @click="typewritesInStock = !typewritesInStock">재고변경</button>
        </div>

        <hr/>

        <div id="myApp2">
            <p v-if="typewriterCount > 3">
                재고 있음
            </p>
            <p v-else-if="typewriterCount > 0">
                재고 없음
            </p>
            <p v-else>
                재고 확인중
            </p>
            <button @click="typewriterCount = 5">재고있음</button>
            <button @click="typewriterCount = 2">재고없음</button>
            <button @click="typewriterCount = -1">재고확인중</button>
        </div>

        <hr/>

        <div id="myApp3">
            <div v-if="text.includes('pizza')">
                <p>The text includes the word 'pizza'</p>
                <img src="../../img_pizza.svg" alt="피자">
            </div>
            <div v-else-if="text.includes('burrito')">
                <p>The text includes the word 'burrito'</p>
                <img src="../../img_burrito.svg" alt="burrito">
            </div>
            <p v-else>The Words 'pizza' or 'burrito' are not found in the text</p>
            <button @click="text = 'pizza'">피자포함</button>
            <button @click="text = 'burrito'">부리또포함</button>
            <button @click="text = ''">모두 안포함</button>
        </div>

    </div>
</template>
<style>
    #myApp, #myApp2 {
      border: dashed black 1px;
      width: 100%;
      padding: 20px;
      font-weight: bold;
      background-color: lightgreen;
      margin:10px; 
    }
    button{
        margin:5px;
    }
  </style>