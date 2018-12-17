let sequenceTest = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


/* Exercice 1 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau. */
function exercice1(sequence)
{
	let currentElt;										// élément courant

	for (var i = 0; i < sequence.length; i++) 			// boucle qui parcourt tous les éléments de la séquence en paramètre
	{
		currentElt = sequence[i];						// stocke l'élément courant

		console.log(currentElt);						// affiche en console l'élément courant
	}
}



/* Exercice 2 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau. */
function exercice2(sequence)
{
	let currentElt;										// élément courant

	for (var i = 0; i < 10; i++) 						// boucle qui se répète 10 fois
	{
		currentElt = sequence[i];						// stocke l'élément courant

		if (currentElt == undefined) 					// si l'élément courant est undefined (au cas où la séquence aurait moins de 10 éléments)
		{
			break;										// sort de la boucle
		}

		console.log(currentElt);						// affiche l'élément courant
	}	
}



/* Exercice 3 : Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers éléments de ce tableau. */
function exercice3(sequence)
{
	let currentElt;

	for (var i = sequence.length - 1; i >= sequence.length-10; i--) // i commence à l'index du dernier élément, et la boucle s'effectue 10x
	{
		currentElt = sequence[i];									// stocke l'élément courant

		if (i < 0) 													// si i < 0, stoppe la boucle
		{
			break;
		}

		console.log(currentElt);									// affiche l'élément courant
	}
}


let sequenceTestNbr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 8, 7, 15, 13, 14, 15, 16, 17, 18, 19, 20];



/* Exercice 4 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1. */
function exercice4(sequence)
{
	let currentElt;									
	let returnedArray = [];											// tableau qui sera retourné à la fin de la fonction

	for (var i = 0; i < sequence.length; i++) 						// parcourt tous les éléments de la séquence en paramètre
	{
		currentElt = sequence[i];									// stocke l'élément courant
		returnedArray.push(currentElt+1);							// rajoute l'élément courant + 1 dans le tableau qui sera retourné
	}

	return returnedArray;											// retourne le tableau
}



/* Exercice 5 : Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non. */
function exercice5(sequence)
{
	let currentElt;

	for (var i = 0; i < sequence.length; i++) 
	{
		currentElt = sequence[i];

		if (currentElt % 2) 										// si le reste d'une division de currentElt par 2 est égal à 1, l'élément est impair
		{
			console.log(currentElt + ' est impair');				// affiche que l'élément est impair
		}
		else														// sinon, l'élément est pair
		{
			console.log(currentElt + ' est pair');					// affiche que l'élément est pair
		}
	}
}



/* Exercice 6 : Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau. */
function exercice6(sequence)
{
	let currentElt;													// élément courant
	let sum = 0;													// somme qui sera retournée

	for (var i = 0; i < sequence.length; i++) 						
	{
		currentElt = sequence[i];									// stocke l'élément courant

		sum += currentElt;											// ajoute l'élément courant à la variable sum
	}

	return sum;														// retourne la somme
}



/* Exercice 7 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d’éléments pairs de ce tableau. */
function exercice7(sequence)
{
	let currentElt;
	let evenNumbersCount = 0;										// total des nombres pairs

	for (var i = 0; i < sequence.length; i++) 
	{
		currentElt = sequence[i];									// stocke l'élément courant

		if (!(currentElt % 2)) 										// si le reste de currentElt divisé par 2 est égal à 0, l'élément est pair
		{
			evenNumbersCount++;										// incrémente le nombre d'éléments pairs
		}
	}

	return evenNumbersCount;										// retourne le nombre d'éléments pairs
}



/* Exercice 8 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum de ce tableau. */
function exercice8(sequence)
{
	let currentElt;
	let highestNumber = sequence[0];								// stocke le premier élément de la séquence									

	for (var i = 0; i < sequence.length; i++) 
	{
		currentElt = sequence[i];

		if (currentElt > highestNumber) 							// si l'élément courant est supérieur à celui stocké dans highestNumber
		{
			highestNumber = currentElt;								// change la valeur de highestNumber
		}
	}

	return highestNumber;											// retourne le chiffre le plus haut
}



/* Exercice 9 : Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum et minimum de ce tableau. */
function exercice9(sequence)
{
	let currentElt;														// élément courant
	let highestNumber = sequence[0];									// nombre le plus haut
	let lowestNumber = sequence[0];										// nombre le plus bas

	for (var i = 0; i < sequence.length; i++) 			
	{
		currentElt = sequence[i];										// stocke l'élément courant

		if (currentElt > highestNumber) 								// si l'élément courant est supérieur à la valeur actuelle d'highestNumber
		{
			highestNumber = currentElt;									// remplace la valeur d'highestNumber par l'élément courant
		}
		if (currentElt < lowestNumber) 									// si l'élément courant est inférieur à la valeur actuelle de lowestNumber
		{
			lowestNumber = currentElt;									// remplace la valeur de lowestNumber par l'élément courant
		}
	}

	console.log('La valeur minimale est ' + lowestNumber + ' et la valeur maximale est ' + highestNumber); // affiche le résultat
}



/* Exercice 10 : Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas. */
function exercice10(sequence)
{
	let currentElt;
	let previousElt = sequence[0];										// stocke le premier élément du tableau

	for (var i = 1; i < sequence.length; i++) 
	{
		currentElt = sequence[i];										// stocke l'élément courant

		if (currentElt < previousElt) 									// si l'élément courant est inférieur à l'élément précédent
		{
			console.log("faux");										// envoie faux
			return;														// met fin à la fonction
		}
		else															// sinon, remplace la valeur de previousElt par l'élément courant
		{
			previousElt = currentElt;
		}
	}

	console.log("vrai");												// si la fonction n'a pas été stoppée pendant la boucle, les valeurs sont croissantes et renvoie vrai
}



/* Exercice 11 : Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. 
Dans le tableau retourné, chaque élément n'a qu'une seule occurrence. */
function exercice11(sequence)
{
	let currentElt;									 // élément courant

	let secondArray = [sequence[0]];				 // sequence qui sera renvoyé, contient pour l'instant la première valeur du sequence passé en paramètre

	let secondArrayCurrentElt;						 // élément courant pour le second sequence

	let isAlreadyThere = false;						 // booléen qui vaudra vrai lorsqu'on rencontrera un même élément 2 fois

	for (var i = 0; i < sequence.length; i++) 
	{
		currentElt = sequence[i]					 // stocke l'élément courant

		for (var j = 0; j < secondArray.length; j++) // seconde boucle pour parcourir le second sequence et vérifier si l'élément courant s'y trouve déjà ou non
		{
			secondArrayCurrentElt = secondArray[j];	 // stocke l'élément courant du second sequence

			if (currentElt == secondArrayCurrentElt) // si l'élément courant du premier sequence correspond à celui du second
			{
				isAlreadyThere = true;				 // le booléen devient vrai
			}
		}

		if (!isAlreadyThere) 						// après avoir parcouru le second sequence, si le booléen est faux (donc que l'élément courant n'existait pas dans le second sequence)
		{
			secondArray.push(currentElt);			// on ajoute l'élément courant au second sequence
		}
		else										// sinon, c'est à dire si le booléen vaut vrai et que l'élément existait déjà dans le second sequence
		{
			isAlreadyThere = false;					// on n'ajoute pas l'élément au second sequence, et le booléen redevient faux pour le prochain tour de boucle
		}
	}

	return secondArray;								// retourne le second sequence
}



/* Exercice 12 : Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. 
Dans le tableau retourné, l'ordre des éléments est inversé. */
function exercice12(sequence)
{
	let currentElt;
	let secondArray = [];							// crée un tableau qui sera retourné

	for (var i = sequence.length - 1; i >= 0; i--) 	// parcourt la séquence passée en paramètre dans le sens inverse
	{
		currentElt = sequence[i];					// stocke l'élément courant

		secondArray.push(currentElt);				// ajoute l'élément courant à la séquence secondArray
	}

	return secondArray;								// retourne secondArray;
}


let sequenceTestNbr2 = [33, 47, 12, 1, 9, 15, 6, 10];



/* Exercice 13 : Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux 
d'entiers passés en paramètres. */
function exercice13(sequence, sequence2)
{
	let thirdArray = sequence;						// 3ème tableau qui sera retourné, vaut le premier tableau
	let currentElt;

	for (var i = 0; i < sequence2.length; i++) 		// parcourt le second tableau
	{
		currentElt = sequence2[i];					// stocke l'élément courant

		thirdArray.push(currentElt);				// ajoute l'élément courant du second tableau à la fin du tableau
	}

	return thirdArray;								// retourne le 3ème tableau
}


let stringArray = ['Abricot', 'Banane', 'Cerise', 'Ananas', 'Mangue'];



/* Exercice 14 : Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau 
passé en paramètre commençant par une voyelle. */
function exercice14(sequence)
{
	let currentElt;
	let newArray = [];								// nouveau tableau à retourner

	for (var i = 0; i < sequence.length; i++) 
	{
		currentElt = sequence[i];					// stocke l'élément courant

		if (currentElt[0].toUpperCase() == 'A' || currentElt[0].toUpperCase() == 'E' || currentElt[0].toUpperCase() == 'I' || currentElt[0].toUpperCase() == 'O' ||
			currentElt[0].toUpperCase() == 'U' || currentElt[0].toUpperCase() == 'Y') 		// si la première lettre de l'élément courant est une voyelle
		{
			newArray.push(currentElt);				// ajoute l'élément courant au tableau qui sera retourné
		}
	}

	return newArray;								// retourne le tableau
}



/* Exercice 15 : Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est un palindrome, ou qui renvoie faux si ce n’est pas le cas. */
function exercice15(string)
{
	let currentElt;
	let reversedString = '';						// variable qui stockera la chaîne passée en paramètre à l'envers

	for (var i = string.length - 1; i >= 0; i--) 	// parcourt la chaine en paramètre à l'envers
	{
		currentElt = string[i];

		reversedString += currentElt;				// ajoute chaque lettre à reversedString
	}

	if (string == reversedString) 					// si la nouvelle chaîne inversée est égale à la chaine originale
	{
		return true;								// renvoie vrai
	}
	else
	{
		return false;								// sinon, renvoie faux
	}
}




/* Exercice 16 : Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère chaîne est un anagramme de la 2ème chaîne, 
ou qui renvoie faux si ce n’est pas le cas. */
function exercice16(string1, string2)
{
	let currentElt;
	let currentElt2;
	let resultArray1 = string1.split('');				// stocke la première chaine séparée en tableau
	let resultArray2 = string2.split('');				// idem pour la seconde chaine


	for (var i = 0; i < resultArray1.length; i++) 		// parcourt le premier tableau
	{
		currentElt1 = resultArray1[i];					// stocke l'élément courant du premier tableau

		for (var j = 0; j <resultArray2.length; j++) 	// parcourt le second tableau
		{
			currentElt2 = resultArray2[j];				// stocke l'élément courant du second tableau

			if (currentElt1 == currentElt2) 			// si l'élément courant du second tableau est égal à celui du premier tableau
			{
				resultArray1.splice(i, 1);				// supprime cet élément des 2 tableaux
				resultArray2.splice(j, 1);
				i = -1;									// réinitialise j et i à -1 (avant qu'ils soient incrémentés et repassent à 0) pour re parcourir du début
				j = -1;									// (pour ne pas avoir d'erreur en ayant un index supérieur à la longueur du tableau)
				break;									// met fin à la seconde boucle
			}
		}
	}

	if (resultArray1.length == 0 && resultArray2.length == 0) // si la longueur des 2 tableaux est égale à 0 (donc si chaque lettre a trouvé une correspondance)
	{
		return true;										  // renvoie vrai
	}
	else													  // sinon, renvoie faux
	{
		return false;
	}
}



//Exercice 11
console.log("Exercice 11")

let arrayC = [1,1,1,1,2,2,2,2,3,3,3]

function array(arrayC) {
  let i = 0;
  let currentElmnt;
  let j;
  let copyArray = [];
  let copy;
  copyArray.push(arrayC[0]);
  while(i < arrayC.length) {
    currentElmnt = arrayC[i+1];
    i = i +1;
    j = 0;
    copy = true;
    while(j < copyArray.length){
      if(currentElmnt === copyArray[j]){
        copy = false;
      }
      j = j +1;
   }
   if (copy) {
     copyArray.push(currentElmnt)
   }
  }
  return copyArray
}

console.log(array(arrayC));