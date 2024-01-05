<script setup>
import Header from './components/Header.vue'
import { onBeforeMount, onMounted, onUpdated, ref } from "vue";
//equivalente a document.ready de jquery
// window.addEventListener("DOMContentLoaded", (event) => {
onMounted(() => {
  console.log('DOMContentLoaded');

  // map our commands to the classList methods
  const fnmap = {
    'toggle': 'toggle',
    'show': 'add',
    'hide': 'remove'
  };
  const collapse = (selector, cmd) => {
    const targets = Array.from(document.querySelectorAll(selector));
    targets.forEach(target => {
      target.classList[fnmap[cmd]]('show');
    });
  }

  // Grab all the trigger elements on the page
  const triggers = Array.from(document.querySelectorAll('[data-toggle="collapse"]'));

  // Listen for click events, but only on our triggers
  window.addEventListener("click", callback);
  window.addEventListener("touchstart", callback);

  function callback(ev) {

    console.log('click');

    const elm = ev.target;
    if (triggers.includes(elm)) {
      const selector = elm.getAttribute('data-target');
      collapse(selector, 'toggle');
    }
  };
});
</script>

<template>
  <Header />
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<!-- <style scoped></style> -->
