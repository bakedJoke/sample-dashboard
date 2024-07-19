<template>
   
    <div class="d-flex justify-content-center">
            <div class="w-75 mt-4 border">
                <ul class="nav text-center nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item col-6 border-end" role="presentation">
                        <a class="nav-link p-3 bg-secondary text-white" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Information</a>
                    </li>
                    <li class="nav-item col-6 " role="presentation">
                        <a class="nav-link p-3 bg-secondary text-white" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">About</a>
                    </li>
                </ul>
                <div class="tab-content " id="myTabContent">
                    <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                        <form class="p-3">
                            <div class="row g-3">
                                <div class="col-sm-6">
                                <label for="firstName" class="form-label">First name</label>
                                <input type="text" class="form-control" id="firstName" placeholder="" value="" >
                                <div class="invalid-feedback">
                                    Valid first name is required.
                                </div>
                                </div>

                                <div class="col-sm-6">
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