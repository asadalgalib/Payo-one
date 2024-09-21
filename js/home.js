// console.log('hi');

document.getElementById("btn-add-money").addEventListener('click', function (event) {
    event.preventDefault();

    const addMoney  = document.getElementById("amount-money").value;
    const addMoneyNumber = parseFloat(addMoney);

    const pinNum = document.getElementById("pin-number").value;

    let sum = document.getElementById("finale-amount").innerText;
    let sumNumber = parseFloat(sum);

   if(pinNum === '12345'){
    const total = addMoneyNumber + sumNumber;
    document.getElementById("finale-amount").innerText = total;
   }
   else{
    alert('Invalid PIN');
   }
})