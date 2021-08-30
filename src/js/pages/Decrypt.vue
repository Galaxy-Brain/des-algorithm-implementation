<template>
    <div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8 col-10">
                    <div class="card text-start">
                      <img class="card-img-top" src="" alt="">
                      <div class="card-body">
                        <h4 class="card-title">Decrypt your message</h4>
                            <div class="mb-3">
                              <label for="message" class="form-label">Encrypted Message</label>
                              <textarea v-model="data.message" class="form-control" name="message" id="message" rows="3"></textarea>
                            </div>
                            <div class="mb-3">
                              <label for="otp" class="form-label">One time Password</label>
                              <input type="password"
                                class="form-control" v-model="data.password" name="otp" id="otp" aria-describedby="otp" placeholder="Enter the password you have received">
                              <small id="otp" class="form-text text-muted">OTP Received in email</small>
                            </div>  
                            
                            <button @click="decrypt" class="btn btn-secondary">Decrypt</button>
                      </div>
                    </div>
                    <div class="card text-white bg-secondary">
                      <div class="card-body">
                        <h5 class="card-title" :class="decrypted? 'text-warning':''">{{ dec_message }}</h5>
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
            data:{
                password:'',
                message:''
            },
            dec_message:'Decrypted Message',
            decrypted:false
        }
    },
    methods: {
        decrypt(){
            Axios.post('/decryption',this.data)
            .then((res) => {
                if(res.status ==200){
                    Toast.fire({
                        icon: 'success',
                        text: res.data
                    })
                    this.decrypted = true
                }
            }).catch((err) => {
                Toast.fire({
                        icon: 'success',
                        text: err.response.data.message
                    })
            });
        }
    }    
}
</script>