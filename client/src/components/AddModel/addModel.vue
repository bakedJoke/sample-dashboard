<template>
      <div class="d-flex justify-content-center">
            <div class="w-75 mt-4 border">
                <ul class="nav text-center nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item col-3 border-end" role="presentation">
                        <a class="nav-link p-3 bg-secondary text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">OverView</a>
                    </li>
                    <li class="nav-item col-3 border-end" role="presentation">
                        <a class="nav-link p-3 bg-secondary text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Specification</a>
                    </li>
                    <li class="nav-item col-3 border-end" role="presentation">
                        <a class="nav-link p-3 bg-secondary text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">WaterToys</a>
                    </li>
                    <li class="nav-item col-3 " role="presentation">
                        <a class="nav-link p-3 bg-secondary text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Accommodation</a>
                    </li>
                </ul>
                <div class="tab-content " id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <form class="p-3">
                            <div class="row g-3">
                                <div class="col-12">
                                <label for="firstName" class="form-label" @click="c">Model Name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" >
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                                </div>

                                <div class="col-12">
                                <label for="lastName" class="form-label">Brief</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" >
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                                </div>

                                <div class="col-12">
                                <label for="description" class="form-label">Description</label>
                                <textarea type="text" class="form-control" id="description"></textarea>
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                                </div>
                            </div>
                        </form>
                        <div class="container px-4 py-3">
                            <div class="border p-4">
                            <div class="d-flex justify-content-between align-items-center">
                                <h5>Key Features</h5>
                                <a data-bs-toggle="modal" data-bs-target="#exampleModal" class="btn btn-sm btn-primary">Add New</a>
                            </div>
                            <hr />
                                <div class="row">
                                    <div class="mb-md-0 mb-3 col-4" v-for="(card,index) in model.keyFeatures" :key="index">
                                        <div class="card" style="width: 18rem;">
                                            <div class="card-body">
                                                <h5 class="card-title">{{ card.name }}</h5>
                                                <p class="card-text">{{ card.value }}</p>
                                                <div class="text-center">
                                                    <button href="#" class="btn btn-success text-center me-1"><font-awesome-icon :icon="['fas', 'pencil']"  /></button>
                                                    <button href="#" class="btn btn-danger text-center"><font-awesome-icon :icon="['fas', 'trash']"  /></button>
                                                </div>
                                            </div>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <modal :keyFeatures="model.keyFeatures"></modal>


                    <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                        <form class="p-3">
                            <div class="row g-3">
                                <div class="col-12">
                                <label for="firstName" class="form-label">Current Password</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" >
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                                </div>

                                <div class="col-12">
                                <label for="lastName" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="lastName" placeholder="" value="" >
                                <div class="invalid-feedback">
                                    Valid last name is required.
                                </div>
                                </div>

                                <div class="col-12">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control" id="email" placeholder="you@example.com">
                                <div class="invalid-feedback">
                                    Please enter a valid email address for shipping updates.
                                </div>
                                </div>

                            </div>
                            

                                
                            <div class="d-flex justify-content-start mt-4">   
                                <button class="w-25 btn btn-primary" type="submit">Save</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
</template>
<script setup lang="ts">
import modal from "@/components/Modal/modal.vue";
import { ref } from "vue";
const model=ref({
    name:"",
    brief:"",
    description:"",
    keyFeatures:[]
});

const c = ()=>{
    console.log(model.value);
    
}


</script>