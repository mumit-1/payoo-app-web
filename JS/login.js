console.log("fucked");
document.getElementById('btn-login').addEventListener('click',function(event){
     event.preventDefault();  //<-- it helps to prevent refresh.
    const data = document.getElementById('input-field').value;

    const pinData = document.getElementById('pin-field').value;
   if(pinData === '5' && data === '12345'){
    window.location.href ='/home.html';
   }
   else{
    alert('wrong data')
   }
  
})