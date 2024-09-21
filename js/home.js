// add money

document.getElementById("add-money-btn").addEventListener('click',function(){
   const bodyOne = document.getElementById("add-money-container");
   bodyOne.classList.remove('hidden');
   const bodyTwo = document.getElementById("cash-out-container");
   bodyTwo.classList.add('hidden')
});



document.getElementById("btn-add-money").addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney  = document.getElementById("amount-money").value;
    const addMoneyNumber = parseFloat(addMoney);

    const pinNum = document.getElementById("pin-number").value;

    let sum = document.getElementById("finale-amount").innerText;
    let sumNumber = parseFloat(sum);

   if(pinNum === '1234'){
    const total = addMoneyNumber + sumNumber;
    document.getElementById("finale-amount").innerText = total;
   }
   else{
    alert('Invalid PIN');
   }
});

// cash out

document.getElementById("cash-out-btn").addEventListener('click',function(){
    const bodyOne = document.getElementById("add-money-container");
    bodyOne.classList.add('hidden');
    const bodyTwo = document.getElementById("cash-out-container");
    bodyTwo.classList.remove('hidden');
 });

document.getElementById("btn-cash-out").addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney  = document.getElementById("cash-amount-money").value;
    const addMoneyNumber = parseFloat(addMoney);

    const pinNum = document.getElementById("cash-pin-number").value;

    let sum = document.getElementById("finale-amount").innerText;
    let sumNumber = parseFloat(sum);

   if(pinNum === '1234'){
    const total = sumNumber - addMoneyNumber;
    document.getElementById("finale-amount").innerText = total;
   }
   else{
    alert('Invalid PIN');
   }
});

