const displayX = document.getElementById("add-div");
const displayY = document.getElementById("out-div");
const displayZ =document.getElementById("transaction-div");
document.getElementById("add").addEventListener("click", function () {
  displayY.classList.add("hidden");
  displayZ.classList.add("hidden");
  displayX.classList.remove("hidden");
  
});
document.getElementById("out").addEventListener("click", function () {
  displayX.classList.add("hidden");
  displayZ.classList.add("hidden");
  displayY.classList.remove("hidden");
});
document.getElementById('transaction-btn')
.addEventListener('click',function(){
    displayX.classList.add("hidden");
    displayZ.classList.remove("hidden");
    displayY.classList.add("hidden"); 
})


//money-add


document
  .getElementById("money-add")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinValidation = document.getElementById("PIN-validation").value;
    const addMoneyAmount = document.getElementById("add-money-field").value;
    const totalAmount =
        document.getElementById("total-amount").innerText
      ;
      const totalNumber = parseFloat(totalAmount);
      const addMoneyNumber = parseFloat(addMoneyAmount)
    if (pinValidation === "5" && addMoneyAmount > 0) {
      const sum = totalNumber + addMoneyNumber;
      document.getElementById("total-amount").innerText=sum
      
    } else {
      alert("wrong data");
    }
    document.getElementById("PIN-validation").value = "";
    document.getElementById("add-money-field").value = "";
  });


//money-out


document
  .getElementById("money-out")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const pinValidation = document.getElementById("PIN-validation2").value;
    const outMoneyAmount = document.getElementById("out-money-field").value;
    const totalAmount =
        document.getElementById("total-amount").innerText
      ;
      const totalNumber = parseFloat(totalAmount);
      const outMoneyNumber = parseFloat(outMoneyAmount)
    if (pinValidation === "5"  && outMoneyNumber <= totalNumber) {
      const sum = totalNumber - outMoneyNumber;
      document.getElementById("total-amount").innerText=sum
      
    } else {
      alert("wrong data");
    }
    document.getElementById("PIN-validation2").value = "";
    document.getElementById("out-money-field").value = "";
  });

