		  
// // **1. zadatak**

// var cene = [5, 145, 69, 56, 13, 456, 78, 4, 30];
// var ceneSaPorezom = [];
// var zbirCenaSaPorezom = 0;
// var zbirCena = 0;
// var zbirUkupnogPoreza = 0;

// for (i = 0; i < cene.length; i++) {
	
// 	zbirCena += cene[i];
	
// 	if (cene[i] < 50) {
// 		ceneSaPorezom.push(cene[i] * 1.18);
// 	}

// 	else {
// 		ceneSaPorezom.push(cene[i] * 1.05);
// 	}
// }

// console.log("Cene sa uracunatim porezom iznose: \n" + ceneSaPorezom[0] + "\n" + ceneSaPorezom[1] + "\n" + ceneSaPorezom[2] + "\n" + ceneSaPorezom[3] + "\n" + ceneSaPorezom[4] + "\n" + ceneSaPorezom[5] + "\n" + ceneSaPorezom[6] + "\n" + ceneSaPorezom[7] + "\n" + ceneSaPorezom[8] + "\n" );

// for (i = 0; i < ceneSaPorezom.length; i++) {
	
// 	zbirCenaSaPorezom += ceneSaPorezom[i]

// 	zbirUkupnogPoreza = zbirCenaSaPorezom - zbirCena
// }

// console.log("Zbir cena sa uracunatim porezom iznosi: " + zbirCenaSaPorezom);



// console.log("Zbir poreza dodatog na cene iznosi: " + zbirUkupnogPoreza);



// // **2. zadatak**

var kontrolaUnosa = ("^[a-zA-Z]+$$");

do {
	var rec = prompt ("Unesite rec");
}

while (!rec.match(kontrolaUnosa));

var recAry = [];
var recAryUnazad = [];

for (i = 0; i < rec.length; i++) {
	recAry.push(rec[i])
}

for (i = recAry.length -1; i>=0; i--) {
	recAryUnazad.push(recAry[i]);
}

recAry1 = String(recAry);
recAry2 = String(recAryUnazad);

if (recAry1 === recAry2) {
	console.log("rec je palindrom");
}

else {
	console.log("rec nije palindrom");
}


 	







