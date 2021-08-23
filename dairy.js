function milkProduc(e){
    e.preventDefault();

    let a = parseFloat(document.getElementById("sa").value);
    let b = parseFloat(document.getElementById("sb").value);
    let c = parseFloat(document.getElementById("sc").value);
    let d = parseFloat(document.getElementById("sd").value);
    let shedTotal =  a+b+c+d;
    
    document.getElementById("shA").innerHTML=a + " litres";
    document.getElementById("shB").innerHTML=b + " litres";
    document.getElementById("shC").innerHTML=c + " litres";
    document.getElementById("shD").innerHTML=d + " litres";
    document.getElementById("shT").innerHTML=shedTotal + " litres"
    
   
}
function shClear(){
    document.getElementById("shA").value= " ";
    document.getElementById("shB").value= " ";
    document.getElementById("shC").value= " ";
    document.getElementById("shD").value= " ";
    document.getElementById("shT").value= " ";
    
}

