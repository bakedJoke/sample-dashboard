<template>
            <div class="p-2 d-flex justify-content-between border-bottom w-100" style="height: 100px;">
                  <div class="h-100 d-flex align-items-center">
                      <button class="btn btn-primary d-lg-none" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                      <font-awesome-icon :icon="['fas', 'bars']" />
                      </button>
                  </div>
                <div class="navbar p-3">
                  <div class="btn-group">
                    <a href=""  data-bs-toggle="dropdown">
                      <font-awesome-icon :icon="['fas', 'user']" class="p-3 btn btn-secondary"/>
                    </a> 
                    <ul class="dropdown-menu">
                      <li><RouterLink to="/Account" class="dropdown-item d-flex align-items-center justify-content-center"><font-awesome-icon :icon="['fas', 'user']" class="pe-2" />Account</RouterLink></li>
                      <li><hr class="dropdown-divider"></li>
                      <li><RouterLink to="" class="dropdown-item d-flex align-items-center justify-content-center"><font-awesome-icon :icon="['fas', 'arrow-right-from-bracket']" class="pe-2" />Logout</RouterLink></li>
                    </ul>
                  </div>
                </div>
            </div>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router'

</script>
<style>
.dropdown-menu{left: -230%!important;}
</style>
