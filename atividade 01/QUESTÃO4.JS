var DINHEIRO = prompt("QUANTO R$ VOCÊ VAI COLOCAR DE COMBUSTIVO:");
DINHEIRO = parseFloat(DINHEIRO)
 var COMBUSTIVO = DINHEIRO * 5;
 var KM = COMBUSTIVO * 20;
 
 document.write ("vc podera comprar  ", COMBUSTIVO, "litros", "<br>"); 
 document.write ("vc podera andar  ", KM);
