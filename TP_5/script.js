// ex 1.1
let userData = [																		// tableau en 2 dimensions pour les utilisateurs
			  ['Mathias', 'Ritrono', '34', 'Nantes', 'mr@yopmail.com', '1'],
			  ['Salif', 'Bamogo', '25', 'Brest', 'sb@yopmail.com', '2'],
			  ['Kristina', 'Pavlov', '20', 'Villeurbanne', 'kp@yopmail.com', '3'],
			  ['Elise', 'Seti', '30', 'Grenoble', 'es@yopmail.com', '4'],
			  ['Pierrick', 'Di Angelo', '18', 'Strasbourg', 'pd@yopmail.com', '5'],
			  ['Mohamed', 'Khaoui', '23', 'Lille', 'mh@yopmail.com', '6'],
			  ['Paige', 'Anderson', '42', 'Evry', 'pa@yopmail.com', '7']
			 ];


// ex 1.2
function addUser(firstName, lastName, age, city, mail, array)							// ajoute un utilisateur
{
	let newId = array.length+1;															// génère un nouvel id, égal à la longueur de l'array (avant ajout) +1
	let newArray = [firstName, lastName, age, city, mail, newId];						// récupère les paramètres et le nouvel ID dans un tableau

	array.push(newArray);																// ajoute ce tableau à celui passé en paramètre
}

addUser('abc', 'def', '10', 'Marseille', 'abc@mail.com', userData);						// ajout d'un utilisateur


// ex 1.3
function searchByCity(city, array)														// recherche un utilisateur en fonction de sa ville
{
	let currentElt;
	let newArray = [];																	// crée un nouveau tableau vide

	for (var i = 0; i < array.length; i++) 												// parcourt le tableau passé en paramètre
	{
		currentElt = array[i];

		if (currentElt[3] == city) 														// si la ville correspond
		{
			newArray.push(currentElt);													// ajoute l'utilisateur au newArray
		}
	}

	return newArray;																	// renvoie newArray
}

// searchByCity('Grenoble', userData);

// ex 1.4
function searchByName(name, array)														// recherche un utilisateur par nom ou prénom
{
	let currentElt;
	let newArray = [];

	for (var i = 0; i < array.length; i++) 
	{
		currentElt = array[i];

		if (array[i][0] == name || array[i][1] == name) 								// si le nom ou le prénom correspondent
		{
			newArray.push(currentElt);
		}
	}

	return newArray;																	// renvoie l'utilisateur trouvé
}

searchByName('Mohamed', userData);


// ex 1.5
function searchByString(string, array)													// recherche par chaine
{
	let currentElt;
	let currentElt2;
	let newArray = [];

	for (var i = 0; i < array.length; i++) 
	{
		currentElt = array[i];

		for (var j = 0; j < array[i].length; j++) 										// parcourt chaque élément du tableau
		{
			currentElt2 = array[i][j];

			if (currentElt2.includes(string)) 											// si l'élément contient la chaine recherchée
			{
				newArray.push(currentElt);												// récupère la ligne de l'utilisateur
			}
		}
	}

	return newArray;																	// renvoie la ligne de l'utilisateur trouvé
}




/****************************************************************************** PARTIE 2 ******************************************************************************/

/* 2.1 – En JavaScript, créez une fonction prenant en paramètres un tableau à 2 dimensions et un
booléen. Cette fonction génère une table HTML (balise <table>) à partir du tableau passé en
paramètre. Si le booléen passé en paramètre vaut VRAI, alors, on considère que la 1ère valeur du
tableau correspond à une en-tête ; la fonction génère dans ce cas des éléments HTML de type <th>*/

// ex 2.1
let container = document.createElement("div");							// crée 2 container
document.body.appendChild(container);
let containerForm = document.createElement("div");
document.body.appendChild(containerForm);

let newTable;
let addUserButton;


function createTable(array, header)
{
	newTable = document.createElement("table");
	let currentElt;

	for (var i = 0; i < array.length; i++) 				
	{
		currentElt = array[i];

		eval('var tableRow' + i + ' = document.createElement("tr");');				// crée une row pour chaque sous-tableau
		eval('newTable.appendChild(tableRow'+i+');');


		if (header) 																// si il y a un en tête
		{
			eval('var tableHead' + i + ' = document.createElement("th");');			// crée les th
			eval('tableHead' + i + '.innerHTML = "' + currentElt[0] +'";');
			eval('tableRow'+i+'.appendChild(tableHead'+ i + ');');

			for (var j = 1; j < currentElt.length; j++) 							// et les td pour chaque élément
			{
				eval('var tableCell' + i+j + ' = document.createElement("td")');
				eval('tableCell' + i+j + '.innerHTML = "' + currentElt[j]+'";');
				eval('tableRow'+i+'.appendChild(tableCell'+ i+j + ');')				// ajoute au tr
			}
		}

		else 																		// sinon, ajoute les td pour chaque donnée
		{
			for (var j = 0; j < array[i].length; j++) 
			{
				eval('var tableCell' + i+j + ' = document.createElement("td")');
				eval('tableCell' + i+j + '.innerHTML = "' + currentElt[j]+'";');
				eval('tableRow'+i+'.appendChild(tableCell'+ i+j + ');')				// append au tr
			}
		}
	}

	addUserButton = document.createElement('button');								// crée un bouton
	addUserButton.textContent = "Ajouter";											// ajoute le texte du bouton

	container.appendChild(newTable);												// ajoute au container
	container.appendChild(addUserButton);

	addUserButton.addEventListener('click', function() {							// ajoute l'eventlistener pour afficher le formulaire lors du clic sur le bouton
		container.style.display = 'none';
		containerForm.style.display = 'block';
	}, false);
}

createTable(userData, true);														// utilise la fonction pour créer le tableau


function lineBreak()																// génère un linebreak					
{
	return document.createElement("br");
}

function createLabel(string, stringFor)												// génère un label				
{
	let newLabel = document.createElement("label");
	newLabel.textContent = string;
	newLabel.setAttribute("for", stringFor);

	return newLabel;
}

function createTextInput(nameAndID)													// génère un text input
{
	let newTextInput = document.createElement("input");
	newTextInput.setAttribute("type", "text");
	newTextInput.setAttribute("name", nameAndID);
	newTextInput.id = nameAndID;

	return newTextInput;
}

function createForm()																// crée le formulaire
{
	let newForm = document.createElement("form");

	let nameLabel = createLabel('Nom :', 'nameInput');
	let nameInput = createTextInput('nameInput');

	newForm.appendChild(nameLabel);
	newForm.appendChild(nameInput);
	newForm.appendChild(lineBreak());

	let firstNameLabel = createLabel('Prénom :', 'firstNameInput');					// crée les label et input
	let firstNameInput = createTextInput('firstNameInput');

	newForm.appendChild(firstNameLabel);
	newForm.appendChild(firstNameInput);
	newForm.appendChild(lineBreak());												// ajoute les label et input, et linebreak

	let ageLabel = createLabel('Âge :', 'ageInput');
	let ageInput = document.createElement("input");
	ageInput.setAttribute("type", "number");
	ageInput.setAttribute("name", "ageInput");
	ageInput.id = "ageInput";

	newForm.appendChild(ageLabel);
	newForm.appendChild(ageInput);
	newForm.appendChild(lineBreak());

	let cityLabel = createLabel('Ville :', 'cityInput');
	let cityInput = createTextInput('cityInput');

	newForm.appendChild(cityLabel);
	newForm.appendChild(cityInput);
	newForm.appendChild(lineBreak());

	let emailLabel = createLabel('Email :', 'emailInput');
	let emailInput = createTextInput('emailInput');

	newForm.appendChild(emailLabel);
	newForm.appendChild(emailInput);
	newForm.appendChild(lineBreak());

	let addUserButton2 = document.createElement('button');
	addUserButton2.textContent = "OK";

	newForm.appendChild(addUserButton2);

	let errorMessage = document.createElement('p');									// crée le message d'erreur, caché par défaut
	errorMessage.textContent = 'Veuillez renseigner tous les champs !';
	errorMessage.style.display = 'none';
	errorMessage.style.color = 'red';

	containerForm.appendChild(newForm);
	containerForm.appendChild(errorMessage);
	containerForm.style.display = 'none';

	addUserButton2.addEventListener('click', function(e) {							// ajoute l'eventlistener en cas du clic du bouton du formulaire
		e.preventDefault();															// empêche le rechargement de la page

		if (nameInput.value == '' || firstNameInput.value == '' || ageInput.value == '' || cityInput.value == '' || emailInput.value == '') // si une valeur est vide
		{
			errorMessage.style.display = 'block';									// affiche le message d'erreur
		}
		else
		{
			addUser(nameInput.value, firstNameInput.value, ageInput.value, cityInput.value, emailInput.value, userData);	// sinon, ajoute l'utilisateur avec les données contenues dans les input
			containerForm.style.display = 'none';																			
			container.style.display = 'block';																				// affiche la première page de nouveau
			container.removeChild(newTable);
			container.removeChild(addUserButton);																			// retire le tableau et le bouton de la première page
			createTable(userData, true);																					// qui sont générés de nouveau avec les données mises à jour
		}

	}, false);
}

createForm();																		// crée le formulaire