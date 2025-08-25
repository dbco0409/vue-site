<template>
    <div>
        <h2>예제3. v-show</h2>
        <div v-show="showDiv">
            This div tag can be hidden
        </div>
        <div v-if="showDiv">
            Div tag with v-if
        </div>
        <button @click="showDiv = !showDiv">
            토글
        </button>
        <ol>
            <li v-for="x in manyFoods">
                {{ x }}
            </li>
        </ol>
        <p v-for="(x, index) in manyFoods">
            {{index}} : {{ x }}
        </p>
    </div>


</template>
<script setup>
import { ref } from 'vue';

const showDiv = ref(true);
const manyFoods = ref(['pizza', 'burrito', 'pasta', 'salad', 'sushi']);
</script>
