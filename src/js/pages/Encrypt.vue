<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-10">
                    <div class="card text-start">
                      <img class="card-img-top" src="" alt="">
                      <div class="card-body">
                        <h4 class="card-title">Encrypt your message</h4>
                            <div class="mb-3">
                              <label for="message" class="form-label">Message</label>
                              <textarea v-model="form.message" class="form-control" name="message" id="message" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                              <label for="email" class="form-label">Email Address of Recepient</label>
                              <input type="email" v-model="form.email" class="form-control" name="email" id="email" rows="2">
                            </div>
                            <button @click="encrypt" class="btn btn-secondary">Encrypt</button>
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            form:{
                message:'',
                email:''
            }
        }
    },
    methods: {
        encrypt(){
            if(!this.form.email){
                return Toast.fire({
                    icon:'warning',
                    text: "you can't leave email empty"
                })
            }else{
                Axios.post('/encryption',this.form)
                .then((res) => {
                    if(res.data.status === 200){
                        Toast.fire({
                            icon: 'success',
                            text: res.data
                        })
                    }else{
                        console.log(res.data)
                    }
                }).catch((err) => {
                    Toast.fire({
                            icon: 'error',
                            text: err.response
                        })
                        console.log(err)
                });

            }
        }
    }    
}
</script>