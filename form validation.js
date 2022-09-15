const errorElement = document.getElementById("error");   
const form=document.getElementById("form");
const password = document.getElementById('password')
form.addEventListener('submit',(e)=>{
    
    let messages=[];
    e.preventDefault();
if(password.value.length >= 2){
    messages.push('password must be less than 2');
}

})