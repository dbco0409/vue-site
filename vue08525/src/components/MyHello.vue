<script setup>
import { ref } from 'vue';

const msg = ref("blog");
</script>
<template>
    <p>test</p>
   <div>{{ msg }}</div>
</template>
<style>
p{
    background-color:aqua
}
div {
    border:3px solid salmon
}
</style>