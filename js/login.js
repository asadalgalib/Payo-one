// console.log("button");

document.getElementById("btn-login").addEventListener('click',function(event){
    event.preventDefault(); 
    const phoneNumber = document.getElementById("phone-num").value;
    const pinNumber = document.getElementById("pin-num").value;
   
    if(phoneNumber === '01760167171' && pinNumber === '1234'){
        // /Payo-one
        window.location.href = "/Payo-one/html/home.html";
    }
    else{
        alert('invalid phone number or pin');
    }
});                                                                                        