<template>
  <div class="container px-5 py-3">
    <div class="border p-4">
      <div class="d-flex justify-content-between align-items-center">
        <h2>Model List</h2>
        <RouterLink to="/AddModel"class="btn btn-sm btn-primary">Add New</RouterLink>
      </div>
      <hr />
        <div class="row">
            <div class="col-12 mb-md-0 mb-3 col-md-4" v-for="card in cards">
            <div class="card">
                <img :src="getAssetPath('img/slide1.jpg')" class="img-fluid rounded" />
                <div class="d-flex align-items-center">
                <div class="card-body ">
                    <h4 class="card-title fw-light fs-2">{{ card.title }}</h4>
                    <p class="card-text">Lorem ipsum dolor sit amet.</p>
                    <p class="card-text">
                    <span class="text-body-secondary">Created Date : </span> 11.22.33
                    </p>
                    <div class="">
                    <button class="btn w-100 btn-dark py-2 mb-1">Download PDF</button>
                    <button class="btn w-100 btn-warning py-2 mb-1">Edit Model</button>
                    <button class="btn w-100 btn-danger py-2">Delete Model</button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { getAssetPath } from "@/helpers/asset.ts";
import { RouterLink } from "vue-router";
const cards = [
  {
    title: "Vera 1",
  },
  {
    title: "Vera 2",
  },
  {
    title: "Vera 3",
  }
];
</script>
