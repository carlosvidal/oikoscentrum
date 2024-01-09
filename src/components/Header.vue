<script setup>
import { ref } from 'vue'
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
        <router-link to="/oikos-centrum" class="navegacion__item navegacion__item-oikos">
            <strong>OIKOS</strong><span>CENTRUM</span> </router-link>
        <router-link to="/incubator" class="navegacion__item navegacion__item-incubator">
            <strong>INCUBATOR</strong><span>BASIC
                SOCIAL
                RESEARCH</span> </router-link>
        <router-link to="/laboratory" class="navegacion__item navegacion__item-laboratory">
            <strong>LABORATORY</strong><span>APPLIED SOCIAL RESEARCH</span> </router-link>
        <router-link to="/antenna" class="navegacion__item navegacion__item-antena"> <strong>ANTENNA</strong><span>CULTURAL
                ACTION &
                EDUCATION</span> </router-link>
        <router-link to="/climate-action-now" class="navegacion__item navegacion__item-climateactionnow">
            <span>CLIMATE</span><span class="color-rojo">ACTION</span><span>NOW!</span> </router-link>
    </nav>
</template>