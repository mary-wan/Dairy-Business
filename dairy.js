var a ,b, c, d, shedTotal;
function milkProduc(e){
    e.preventDefault();
     a = parseFloat(document.getElementById("sa").value);
     b = parseFloat(document.getElementById("sb").value);
     c = parseFloat(document.getElementById("sc").value);
     d = parseFloat(document.getElementById("sd").value);
     shedTotal =  a+b+c+d;

    document.getElementById("shA").innerHTML=+a + " litres";
    document.getElementById("shB").innerHTML=b + " litres";
    document.getElementById("shC").innerHTML=c + " litres";
    document.getElementById("shD").innerHTML=d + " litres";
    document.getElementById("shT").innerHTML=shedTotal + " litres";   
    
}
function shClear(){
    document.getElementById("shA").value= " ";
    document.getElementById("shB").value= " ";
    document.getElementById("shC").value= " ";
    document.getElementById("shD").value= " ";
    document.getElementById("shT").value= " ";
    
}
function incomeProjection(e){
    e.preventDefault();
    let rate = document.getElementById("bR").value;
    let weekly = rate * 7 * shedTotal;
    let yearly = rate * 12 * shedTotal
    document.getElementById("wk").innerHTML= weekly + " litres";
    document.getElementById("yr").innerHTML= yearly + " litres";
}


