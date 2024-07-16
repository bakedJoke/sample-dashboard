<template>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Feature</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" v-model="Feature.name" id="floatingInput" placeholder="feature">
                <label for="floatingInput">Feature</label>
                </div>
                <div class="form-floating mb-3">
                <input type="text" class="form-control rounded-3" v-model="Feature.value" id="floatingPassword" placeholder="value">
                <label for="floatingPassword">Password</label>
                </div>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary" @click="save">Save changes</button>
        </div>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    keyFeatures:{
        type:Array,
        default:[]
    }
})
const Feature=ref({
    name:"",
    value:""
})
const save = ()=>{
    
    props.keyFeatures.push(Feature.value);
}
</script>