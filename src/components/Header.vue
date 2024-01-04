<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})

const count = ref(0)
</script>

<template>
    <!-- AUTH -->
    <div class="user-session">
        <div class="msg">
        </div>
        <form id="keep-me-posted" class="keep-me-posted" method="post" action="http://localhost:8888/keep_me_posted/signup">
            <input type="hidden" name="current_uri" value="http://localhost:8888/oikoscentrum">
            <div class="InputAddOn">
                <input type="text" id="email" name="email" placeholder="Email address">
                <button class="btn">Keep me posted</button>
                <div data-lastpass-icon-root="true"
                    style="position: relative !important; height: 0px !important; width: 0px !important; float: left !important;">
                </div>
            </div>
        </form>
        <a href="#login-modal" rel="modal:open" class="btn">Login</a>
        <a href="http://localhost:8888/signup" class="btn">Sign up</a>

    </div>
    <!-- NAVEGACION -->
    <nav class="navegacion">
        <a href="#oikoscentrum" class="navegacion__item navegacion__item-oikos">
            <strong>OIKOS</strong><span>CENTRUM</span> </a>
        <a href="#incubator" class="navegacion__item navegacion__item-incubator"> <strong>INCUBATOR</strong><span>BASIC
                SOCIAL
                RESEARCH</span> </a>
        <a href="#laboratory" class="navegacion__item navegacion__item-laboratory">
            <strong>LABORATORY</strong><span>APPLIED SOCIAL RESEARCH</span> </a>
        <a href="#antenna" class="navegacion__item navegacion__item-antena"> <strong>ANTENNA</strong><span>CULTURAL
                ACTION &
                EDUCATION</span> </a>
        <a href="#campaings" class="navegacion__item navegacion__item-climateactionnow">
            <span>CLIMATE</span><span class="color-rojo">ACTION</span><span>NOW!</span> </a>
    </nav>
</template>