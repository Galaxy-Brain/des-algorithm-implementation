const { default: Swal } = require('sweetalert2')

require('bootstrap')
window.Popper = require('@popperjs/core')
window.$ = require('jquery')
window.Axios = require('axios')

window.Swal = require('sweetalert2')

window.Toast = Swal.mixin({
    toast:true,
    position: 'top-right',
    timer:5000,
    timerProgressBar:true
})