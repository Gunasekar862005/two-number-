


function mUlti(){
 


    var a = document.getElementById("num1").value;
    var b = document.getElementById("num2").value;
        var c = a*b;
    
    document.getElementById('re').innerHTML= "Answer :"+c;

}
mUlti();


function reSet(){
  
  document.getElementById("num1").value= "";
  document.getElementById("num2").value= "";
  document.getElementById("re").innerText= "";

}

reSet();
