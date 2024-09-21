// console.log("button");

document.getElementById("btn-login").addEventListener('click',function(event){
    event.preventDefault(); 
    const phoneNumber = document.getElementById("phone-num").value;
    const pinNumber = document.getElementById("pin-num").value;
   
    if(phoneNumber === '5' && pinNumber === '12345'){
        window.location.href = "./html/home.html";
    }
    else{
        alert('invalid phone number or pin');
    }
});                                                                                        