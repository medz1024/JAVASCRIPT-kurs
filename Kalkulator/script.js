/* 1. Kopirati folder Zadatak 1 na vaš računar i nastaviti rad u istom. Otvoriti datoteku script.js i napisati kod za izradu zadatka. Napraviti aplikaciju kalkulator/digitron za operacije sabiranja i množenja. Slika aplikacije je data ispod. Sljedeće validacije uraditi: a. Ukoliko nisu upisane vrijednosti u input polja ispisati poruku "Input polja ne smiju biti prazna" b. Ako se ne izabere operacija ispisati grešku "Izaberite operaciju" c. Ukoliko korisnik pokuša upisati tekst unutar input polja za brojeve ispisati grešku "Dozvoljen upis samo brojeva". */


var dugme = document.getElementsByName('izracunaj')[0];
dugme.addEventListener('click', kalk);
 
function kalk(){
     prvibr = document.getElementsByName("prvibroj")[0].value;
     drugibr = document.getElementsByName("drugibroj")[0].value;

 
		if(prvibr == '' || drugibr == ''){
			document.getElementById('error_empty').innerHTML = "Input polja ne smiju biti prazna";
		} 
		else{
		document.getElementById('error_empty').innerHTML = "";
		}
 
   
 
		var operacijaIzbor = document.getElementsByName('operacija');
		for (var i = 0; i<operacijaIzbor.length; i++){
 
                if(operacijaIzbor[i].checked){
                    operacijaIzbor = operacijaIzbor[i].value;              
 
                    if (operacijaIzbor == 1){
                        saberi = parseInt(prvibr) + parseInt(drugibr);
                        document.getElementsByName("rezultat")[0].value = saberi;
                        break;
                    } 
					else{
                        podijeli = parseInt(prvibr) * parseInt(drugibr);
                        document.getElementsByName("rezultat")[0].value = podijeli;
                        break;
                    }
 
                } 
				else{
                        document.getElementById('error').innerHTML = "Izaberite operaciju";
                }
    }
 
    
    if(isNaN(prvibr) == true || isNaN(drugibr) == true){
        document.getElementById('error').innerHTML = "Dozvoljen upis samo brojeva";
    } 
	else{
        document.getElementById('error').innerHTML = "";
    }
   
}