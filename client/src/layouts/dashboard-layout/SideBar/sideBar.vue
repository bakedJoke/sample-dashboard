<template>   
    <div class="offcanvas offcanvas-start d-flex d-lg-none flex-column flex-shrink-0  bg-body-tertiary border-end" style="width: 200px;" id="offcanvasExample">
        <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none justify-content-center border-bottom py-2" style="height: 100px;">
            <img :src="getAssetPath('img/logo.png')" alt="logo" width="114" height="69" class="mb-2">
        </a>
        <ul class="nav nav-pills flex-column mb-auto p-3">
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'landmark']" class="pe-1" />
                Company
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'sailboat']" class="pe-1" />
                Models
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'anchor']" class="pe-1" />
                Ports
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium " aria-current="page">
                <font-awesome-icon :icon="['fas', 'user']" class="pe-1" />
                Users
            </a>
        </li>
        <li class="nav-item"> 
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'clock']" class="pe-1" />
                Rezervations
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'calendar-days']" class="pe-1" />
                Calendar
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'user-group']" class="pe-1" />
                Subscribers
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'envelope']" class="pe-1" />
                Messages
            </a>
        </li> 
        </ul>
    </div>


    <div class="d-lg-flex d-none flex-column flex-shrink-0  bg-body-tertiary border-end" style="width: 200px; height: 100vh;">
        <a href="/" class="d-flex align-items-center link-body-emphasis text-decoration-none justify-content-center border-bottom py-2" style="height: 100px;">
            <img :src="getAssetPath('img/logo.png')" alt="logo" width="114" height="69" class="mb-2">
        </a>
        <ul class="nav nav-pills flex-column mb-auto p-3 ">
        <li class="nav-item">
            <RouterLink to="/Company" class="nav-link text-black fw-medium " aria-current="page">
                <font-awesome-icon :icon="['fas', 'landmark']" class="pe-1" />
                Company
            </RouterLink>
        </li>
        <li class="nav-item">
            <RouterLink to="/Models" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'sailboat']" class="pe-1" />
                Models
            </RouterLink>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'anchor']" class="pe-1" />
                Ports
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium " aria-current="page">
                <font-awesome-icon :icon="['fas', 'user']" class="pe-1" />
                Users
            </a>
        </li>
        <li class="nav-item"> 
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'clock']" class="pe-1" />
                Rezervations
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'calendar-days']" class="pe-1" />
                Calendar
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'user-group']" class="pe-1" />
                Subscribers
            </a>
        </li>
        <li class="nav-item">
            <a href="#" class="nav-link text-black fw-medium" aria-current="page">
                <font-awesome-icon :icon="['fas', 'envelope']" class="pe-1" />
                Messages
            </a>
        </li> 
        </ul>
    </div>
</template>
<script setup lang="ts">
import { getAssetPath } from "@/helpers/asset.ts";
import { RouterLink } from "vue-router";
</script>
<style>
.nav-link:hover{background-color: #025464;transition: all 0.2s ease; color: #fff !important;}
</style>