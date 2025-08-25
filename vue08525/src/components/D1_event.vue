<template>
  <h2>예제4. v-event</h2>
  <p>Mouse Count : {{ counter }}</p>
  <button @click="counter++">Click Me</button>
  <hr />
  <button @click="changeColor($event)">Click Me</button>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)
const colors = ref(['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'])
let i=0;
const changeColor = e => {
    e.target.style.color = colors.value[i];
    if(i < colors.value.length - 1)
        i ++;
    else 
        i=0;
}
</script>
