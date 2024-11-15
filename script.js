const latinToMorse = {
	'A':'.-',
	'B':'-...',
	'C':'-.-.',
	'D':'-..',
	'E':'.',
	'F':'..-.',
	'G':'--.',
	'H':'....',
	'I':'..',
	'J':'.---',
	'K':'-.-',
	'L':'.-..',
	'M':'--',
	'N':'-.',
	'O':'---',
	'P':'.--.',
	'Q':'--.-',
	'R':'.-.',
	'S':'...',
	'T':'-',
	'U':'..-',
	'V':'...-',
	'W':'.--',
	'X':'-..-',
	'Y':'-.--',
	'Z':'--..'
}


function getLatinCharacterList(texte){ //je crée une fonction avec un paramètre texte
    
    texte = texte.toUpperCase(); //je convertis mon texte en majuscule pour coincider avec latinToMorse

    let tableauTexte = texte.split("") // je crée une variable pour alimenter un tableau avec chaque caractère de mon paramètre texte
    
    console.log(tableauTexte) //j'affiche mon tableau dans la console
}

getLatinCharacterList("Hello, World") //j'appelle ma fonction avec l'argument "Hello, World"


function translateLatinCharacter(lettreLatin){ //je crée ma fonction avec un paramètre lettreLatin
  const lettres = Object.keys(latinToMorse);  //je decide de créer un tableau avec les lettres latines(les keys de mon objet LatinToMorse)
  const codesEnMorse = Object.values(latinToMorse); //je decide de créer un tableau avec les codes morse(les values de mon objet LatinToMorse)
    for (let i=0;i<lettres.length;i++){ // je crée un boucle pour gérer les index 
      if (lettreLatin === lettres[i]){  // je compare mon paramètre avec la keys  pour récupérer l'index correspondant
      console.log(codesEnMorse[i])     // j'affiche le code en morse correspondant à mon paramètre
    }
  }
  }

translateLatinCharacter("A")  //j'appelle ma fonction avec l'argument "A"
  

function encode(texte) {
    const lettresATrad = getLatinCharacterList(texte) //je récupère le tableau grâce à la fonction initiale
    console.log(lettresATrad) //c'est vérifié
    lettresATrad.forEach(lettre =>{ //je tente de faire le traitement de la deuxieme fonction pour chaque élément de mon tableau ...sans succès, lettres semble vide
    console.log(translateLatinCharacter(lettre));
    
  })
  }
  
  encode("AB") 