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

    let tableauTexte = texte.split("") // je crée une variable pour alimenter un tableau avec chaque caractère de mon paramètre texte
    
    
    console.log(tableauTexte) //j'affiche mon tableau dans la console
 
  
}
getLatinCharacterList("Hello, World") //j'appelle ma fonction avec l'argument "Hello, World"

function translateLatinCharacter(lettreLatin){
  const lettres = Object.keys(latinToMorse);  
  const codesEnMorse = Object.values(latinToMorse);
    for (let i=0;i<lettres.length;i++){
      if (lettreLatin === lettres[i]){
      console.log(codesEnMorse[i])
    }
  }
  }

translateLatinCharacter("A")
  

