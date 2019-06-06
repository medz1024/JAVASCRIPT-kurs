//Zadatak 1.
/*var ispisTekst = setTimeout(function(){
	document.write('<p>Zdravo svima</p>');
}, 3000);


//Zadatak 2
var ponavljajuciTekst = setInterval(function(){
	document.write('<p>Ovo je ponavljajuci tekst.</p>');
}, 5000);


//Zadatak 3.
var i = 0;
var povecanjeZaDva = setInterval(function(){
	document.write(i + '<br>');
	i+=2;
}, 2000);

var brojac = 10;

var newYearBrojac = setInterval(function(){
	document.write(brojac + '<br>');
	brojac--;
	if (brojac == 0){
		document.write('<p>SRETNA NOVA GODINA!!!!</p>');
		clearInterval(newYearBrojac);
	}
}, 1000);


//Zadatak 4.
function writeFullName(imePrezime){

	var imePrezime = prompt('Upišite vaše ime i prezime');

	if (imePrezime != '' && imePrezime != null){
		document.getElementById('demo').innerHTML = imePrezime;
	}else{
		document.getElementById('error').innerHTML = '<p>Niste upisali ime i prezime!</p>';
	}

}

writeFullName();


//Zadatak 5.
function changeName(){
	document.getElementById('demo').innerHTML = 'Javascript';
}


//Zadatak 6.
function punjenjeBaterije(){
	var baterija;

	baterija = document.getElementById("charging").innerHTML = "&#xf244";

	setTimeout(function(){
		baterija = document.getElementById("charging").innerHTML = "&#xf243;";
	}, 1000);

	setTimeout(function(){
		baterija = document.getElementById("charging").innerHTML = "&#xf242;";
	}, 2000);

	setTimeout(function(){
		baterija = document.getElementById("charging").innerHTML = "&#xf241;";
	}, 3000);

	setTimeout(function(){
		baterija = document.getElementById("charging").innerHTML = "&#xf240;";
	},4000);

};
punjenjeBaterije();

setInterval(punjenjeBaterije, 5000);

//Zadatak 7.
var i = 0;
var tekst = 'Lorem ipsum dummy text blabla.';

function ispisiTekst(){
	if(i < tekst.length){
		document.getElementById("tekst").innerHTML += tekst[i];
		i++;
		setTimeout(ispisiTekst, 50);
	}
}


//Zadatak 8.
function upaliSijalicu(){
	document.getElementById("sijalica").innerHTML = '<img src="images/upaljena.gif">';
}

function ugasiSijalicu(){
	document.getElementById("sijalica").innerHTML = '<img src="images/ugasena.gif">';
}
*/

//Zadatak 9.
function getData(){
	var ime = document.getElementById('ime').value;
	var prezime = document.getElementById('prezime').value;
	var dob = document.getElementById('dob').value;
	var email = document.getElementById('email').value;
	var spol = document.querySelector('input[name="gender"]:checked').value;
	var kurs = document.getElementById('kurs').value;
	var kursDaNe = document.querySelector('.kurs:checked').value;

	document.querySelector('.ime').innerHTML = '<b>Ime:</b> ' + ime;
	document.querySelector('.prezime').innerHTML = '<b>Prezime:</b> ' + prezime;
	document.querySelector('.dob').innerHTML = '<b>Datum rođenja:</b> ' + dob;
	document.querySelector('.email').innerHTML = '<b>Email:</b> '+ email;
	document.querySelector('.spol').innerHTML = '<b>Spol:</b> '+ spol;
	document.querySelector('.kurs').innerHTML = '<b>Kurs:</b> '+ kurs;
	document.querySelector('.kursdane').innerHTML = '<b>Da li ste pohađali neki od kurseva u centru:</b> '+ kursDaNe;
}

//Zadatak 10.
function validateData(){
	var imeValidirano = provjeraImena();
	var prezimeValidirano = provjeraPrezimena();
	var emailValidirano = provjeraEmail();
	var dobValidirano = provjeraDOB();
	var spolValidirano = provjeraSpol();
	var kursValidirano = provjeraKurs();
	var kursDaNeValidirano = provjeraKursDaNe();

	if (imeValidirano && prezimeValidirano && emailValidirano && dobValidirano && spolValidirano && kursValidirano && kursDaNeValidirano){
		document.querySelector('.ime').innerHTML = '<b>Ime: </b>' + imeValidirano;
		document.querySelector('.prezime').innerHTML = '<b>Prezime: </b>' + prezimeValidirano;
		document.querySelector('.dob').innerHTML = '<b>Datum rođenja: </b>' + dobValidirano;
		document.querySelector('.email').innerHTML = '<b>Email: </b>' + emailValidirano;
		document.querySelector('.spol').innerHTML = '<b>Spol: </b>' + spolValidirano;
		document.querySelector('.kurs').innerHTML = '<b>Kurs: </b>' + kursValidirano;
		document.querySelector('.kursdane').innerHTML = '<b>Da li ste pohađali neki od kurseva u centru: </b>' + kursDaNeValidirano;
	}else{
		return false;
	}
}

//Validacija za ime
function provjeraImena(){
	var ime = document.getElementById('ime').value;
	if (ime == "" || ime == null){
		document.getElementById('ime').style.border = '1px solid red';
		document.getElementById('error_ime').innerHTML = 'Ime je obavezno!';
		return false;		
	}else{
		document.getElementById('ime').style.border = '1px solid #a7a7a7';
		document.getElementById('error_ime').innerHTML = '';
		return capitalizeString(ime);
	}
}

//Validacija za prezime
function provjeraPrezimena(){
	var prezime = document.getElementById('prezime').value;
	if (prezime == "" || prezime == null){
		document.getElementById('prezime').style.border = '1px solid red';
		document.getElementById('error_prezime').innerHTML = 'Prezime je obavezno!';
		return false;		
	}else{
		document.getElementById('prezime').style.border = '1px solid #a7a7a7';
		document.getElementById('error_prezime').innerHTML = '';
		return capitalizeString(prezime);
	}
}

//Validacija za datum rođenja
function provjeraDOB(){
	var dob = document.getElementById('dob').value;
	if (dob == "" || dob == null){
		document.getElementById('dob').style.border = '1px solid red';
		document.getElementById('error_dob').innerHTML = 'Izaberite datum rođenja.';
		return false;		
	}else{
		document.getElementById('dob').style.border = '1px solid #a7a7a7';
		document.getElementById('error_dob').innerHTML = '';
		return dob;
	}
}
	
//Validacija za email
function provjeraEmail(){
	var email = document.getElementById('email').value;
	var atlocation = email.indexOf('@');
	var dotlocation = email.lastIndexOf('.');
	var atsize = email.split('@').length;

	console.log('atlocation = ' + atlocation);
	console.log('dotlocation = ' + dotlocation);
	console.log('suma = ' + (dotlocation-atlocation));

	if (email == "" || email == null || atlocation < 1 || (dotlocation - atlocation) < 2 || atsize != 2){
		document.getElementById('email').style.border = '1px solid red';
		document.getElementById('error_email').innerHTML = 'Upišite validnu email adresu';
		return false;		
	}else{
		document.getElementById('email').style.border = '1px solid #a7a7a7';
		document.getElementById('error_email').innerHTML = '';
		return email.toLowerCase();
	}
}

//Validacija za spol
function provjeraSpol(){
	var spol = "";
	var spolLength = document.formOne.gender.length;

	for (var i = 0; i < spolLength; i++) {
			if (document.formOne.gender[i].checked){
				spol = document.formOne.gender[i].value;
				break;
			}
		}	
	
	if (spol == "" || spol == null){
		document.getElementById('error_spol').innerHTML = 'Izaberite spol.';
		return false;		
	}else{
		document.getElementById('error_spol').innerHTML = '';
		return spol;
	}
}

//Validacija za kurs
function provjeraKurs(){
	var sel = document.getElementById('kurs');
	var opt;
	var kursLength = sel.options.length;

	for (var i = 0; i < kursLength; i++ ){
        opt = sel.options[i];
        if ( opt.selected === true ){
            break;
        }
    }

	if (opt.value == "" || opt.value == null){
		document.getElementById('error_kurs').innerHTML = 'Izaberite kurs koji želite pohađati.';
		return false;		
	}else{
		document.getElementById('error_kurs').innerHTML = '';
		return opt.value;
	}
}

//Validacija za pohadjanje kursa
function provjeraKursDaNe(){
	// get reference to element containing kurs_da_ne checkboxes
	var checkbox = document.getElementsByName('ckbox[]');
	var str = "";
	var ln = 0;

	// assign function to onclick property of each checkbox
	for (var i=0; i< checkbox.length; i++){
	    if(checkbox[i].checked){
	    	ln++;
	    	str = str + checkbox[i].value;
	    }
	}

	if(ln != 1){
		document.getElementById('error_kursdane').innerHTML = 'Moguće izabrati samo jednu vrijednost.';
		return false;		
	}else{
		document.getElementById('error_kursdane').innerHTML = '';
		return str;
	}
}


//Zadatak 11.
function capitalizeString(a){
	//var ime = document.getElementById('ime');
	var firstLetter = a[0].toUpperCase();
	var restOfLetters = a.substring(1, a.length).toLowerCase();
	var newString = firstLetter + restOfLetters;

	return newString;
}