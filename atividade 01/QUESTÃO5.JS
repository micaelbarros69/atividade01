function IDADE()
{
var IDADE = document.forms["suaIdade"] ["idade"].value;
if (idade == "< 18") {
    alert("Proibido entrar vc e de menor");
    return false
}
else{
    alert ("Olá seja bem-vindo ");
    return true;
}
}
