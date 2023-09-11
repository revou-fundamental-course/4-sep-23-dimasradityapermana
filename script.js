function keliling(){
    var keliling=Number(document.getElementById("sisi").value)*4
    document.getElementById("keliling persegi").value = keliling
}
function luas(){
    var luas=Number(document.getElementById("sisi").value)*
    Number(document.getElementById("luas").value)
    document.getElementById("luas persegi").value = luas
}
function calculate(){
    document.getElementById("luas persegi").value = luas
    document.getElementById("keliling persegi"). value = keliling
}