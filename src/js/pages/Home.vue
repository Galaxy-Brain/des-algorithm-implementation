<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <div class="card-title">
                            <h2 class="text-center"> Welcome to Encrypt/Decrypt</h2>
                        </div>
                        <div class="card-body">
                            <div class="row text-center">
                                <div class="col-md-6 col-12 ">
                                    <router-link to="/encrypt" class="btn btn-lg btn-primary ">
                                        Encrypt
                                    </router-link>
                                </div>
                                <div class="col-md-6 col 12">
                                    <router-link to="/decrypt" class="btn btn-lg btn-primary">
                                        Decrypt
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row justify-content-center my-5">
                <div class="col-10">
                    <table class="table table-bordered table-inverse table-responsive">
                        <thead class="thead-default">
                            <tr class="text-center">
                                <th>Recepient</th>
                                <th>Encrypted Message</th>
                            </tr>
                            </thead>
                            <tbody>
                                <tr v-for="data in Rows" :key="data.id">
                                    <td scope="row">{{ data.email }}</td>
                                    <td>{{ data.message }}</td>
                                </tr>
                                
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            Rows:null
        }
    },

    mounted() {
        Axios.get('/allrecords')
        .then((res) => {
            this.Rows = res.data
        }).catch((err) => {
            Toast.fire({
                icon:'error',
                text:'Cannot Get All Records'
            })
            console.log(err.response.statusText)
        });
    },
}
</script>