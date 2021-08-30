<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark" style="background-color: #1546bb;">
            <div class="container">
                <router-link class="navbar-brand" to="/">DES Algorithm Implementation</router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/encrypt">Encrypt </router-link>
                        </li>
                        <li class="nav-item active">
                            <router-link class="nav-link" to="/decrypt">Decrypt </router-link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
        <div class="my-5">
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>