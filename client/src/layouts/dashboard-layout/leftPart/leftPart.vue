<template>
<div class="w-100">
   <headerDash></headerDash>
    <RouterView></RouterView>
</div>
 

</template>
<script lang="ts" setup>
import {RouterView} from 'vue-router';
import headerDash from '../headerDash/headerDash.vue';

</script>