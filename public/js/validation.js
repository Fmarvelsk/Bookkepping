var  input = document.getElementById('input');
var message = document.getElementById('message');
var btn = document.querySelector('.btn');
var regEx =  /\S+@\S+\.\S+/;
var pattern = /[0-9]\S/;

var email = document.getElementById('email');
var number= document.getElementById('number');
var text;
var report;
var button = function (){ 
    if(input.value!=="" && regEx.test(email.value) && isNaN(number.value)==false && message.value!==""){
        btn.disabled = false;
    }
    else{
        btn.disabled =true;
    }
};
input.addEventListener('blur', button);
email.addEventListener('blur', button);
message.addEventListener('blur', button);
number.addEventListener('blur', button);

function formGo(){
    var name =/[A-Z\a-z\_\-\s]{1,20}$/; 
     var characters =input.value.trim();
     input.value = input.value.substring(0, 20);
   text = document.getElementById('report');
   if(name.test(input.value)== false){
    report ="Invalid";
   }
        else{
         report="";
     }
    
     text.innerHTML = report;
     console.log('report');
    }

 function emailVerify(){
     text= document.getElementById('report1');
     if(regEx.test(email.value)==false){
         report="Enter a valid email"; 
          
     }
     else{
        report="";
     }
     text.innerHTML = report;
    }
function telephone(){
    number=document.getElementById('number').value;
    text = document.getElementById('report2');
    if(isNaN(number) ){
report= "Enter number";
    }
    else{
        report="";

} 
text.innerHTML = report;   
    }

function Message(){ 
    text= document.getElementById('report3');
    var characters = message.value.trim();
if(message.value.length>100){
    message.value = message.value.substring(0, 100);
    report="Max number exceeded"; 
   
}
else{
    return false;
}
text.innerHTML = report; 
}
