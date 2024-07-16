<template>
    <div class="d-flex">
        
        <sideBar></sideBar>
        <div class="w-100">
            <headerDash></headerDash>
            <RouterView></RouterView>
        </div>
    </div>
</template>
<script setup>
import headerDash from './headerDash/headerDash.vue';
import sideBar from './SideBar/sideBar.vue';
import { RouterView } from "vue-router";
</script>