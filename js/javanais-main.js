function isVoyelle(caractere){
	var voyelles = "AÀÂEÉÈÊËIÎÏYOÔUÛÙaàâeéèêëiîïyoôuûù";
	return voyelles.indexOf(caractere)!=-1
}

exports.francaisVersJavanais = function (texteATraduire){
  return francaisVersJavanaisRegex(texteATraduire);
}

/*
* Fonction permettant la traduction francais->javanais  par recursivite
*/
 function francaisVersJavanaisRegex(texteATraduire){
	//detecte un succession consonne-voyelle et intercalle alors les lettres 'av'
	texteATraduire = texteATraduire.replace(/([BCÇDFGHJKLMNPQRSTVWXZbcçdfghjklmnpqrstvwxz' ]{1})([AÀÂEÉÈÊËIÎÏOÔUÛÙaàâeéèêëiîïoôuûù]{1})/g, "$1av$2");
 	//detecte une voyelle en debut de phrase et prefixe avec les lettres 'av'
	texteATraduire = texteATraduire.replace(/^([AÀÂEÉÈÊËIÎÏOÔUÛÙaàâeéèêëiîïoôuûù]{1})/g, "av$1");
	return texteATraduire;

}

exports.javanaisVersFrancais = function (texteATraduire){
  return javanaisVersFrancaisRegex(texteATraduire);
}

/*
* Fonction permettant la traduction  javanais->francais par regexp
*/
 function javanaisVersFrancaisRegex(texteATraduire){
	texteATraduire = texteATraduire.replace(/([BCÇDFGHJKLMNPQRSTVWXZbcçdfghjklmnpqrstvwxz' ]{1})(av|AV)([AÀÂEÉÈÊËIÎÏOÔUÛÙaàâeéèêëiîïoôuûù]{1})/g, "$1$3");
	texteATraduire = texteATraduire.replace(/^av([AÀÂEÉÈÊËIÎÏOÔUÛÙaàâeéèêëiîïoôuûù]{1})/g, "$1");
	return texteATraduire;
}



/*
* Fonction permettant la traduction francais->javanais  par recursivite
*/
 function francaisVersJavanaisRecursivite(texteATraduire, precedeParConsonne, index){
   if(precedeParConsonne == undefined){precedeParConsonne = true;}
 	if(index == undefined){index = 0;}

 	var lettreEnCours = texteATraduire.charAt(index);
 	if(index<=texteATraduire.length-1){

 		if(isVoyelle(lettreEnCours)){
 			//voyelle precedée par consonne
 			if(precedeParConsonne){
 				texteATraduire = texteATraduire.slice(0,index)+'av'+texteATraduire.slice(index);
 				index+=2;
 			}
 			//console.log('tradRecursiveFrancaisEnJavanais ' +texteATraduire);
 			precedeParConsonne=false;
 		}else{
 			//consonne
 			//console.log('tradRecursiveFrancaisEnJavanais ' +texteATraduire);
 			precedeParConsonne=true;
 		}
 		index++
 		texteATraduire = francaisVersJavanaisRecursivite(texteATraduire, precedeParConsonne, index)
 	}

 	 return texteATraduire;
}

exports.francaisVersJavanaisRecursive = function (texteATraduire){
  return francaisVersJavanaisRecursivite(texteATraduire);
}

/*
* Fonction permettant la traduction  javanais->francais par regexp
*/
 function javanaisVersFrancaisRecursivite(texteATraduire, index){
   if(index == undefined){index = 0;}
 	var textTemp = texteATraduire.toLowerCase();
 	var indexTrouve = textTemp.indexOf('av',index);

 	if(indexTrouve!=-1) {
 		if(indexTrouve>0){
 			lettrePrecedente=textTemp.charAt(indexTrouve-1);
 		}
 		lettreSuivante=textTemp.charAt(indexTrouve+2);
 		//console.log('tradRecursiveJavanaisVersFrancais : ' + lettrePrecedente+'av'+lettreSuivante);
 		if((indexTrouve==0 || !isVoyelle(lettrePrecedente)) && isVoyelle(lettreSuivante)){
 			//le av correspond à un av ajouté par l'argot
 			texteATraduire = texteATraduire.slice(0,indexTrouve)+texteATraduire.slice(indexTrouve+2);
 		}
 		 texteATraduire = javanaisVersFrancaisRecursivite(texteATraduire, index+2);
 	}
 	return texteATraduire;
}

exports.javanaisVersFrancaisRecursive = function (texteATraduire){
  return javanaisVersFrancaisRecursivite(texteATraduire);
}





/*
* Fonction lancant la trduction francais vers javanais
*/
function traduireEnJavanais(methode) {
	var txtATraduire = $('textarea#txtAreaFrancais_'+methode).val();
	if(1==methode){
		$('textarea#txtAreaJavanais_'+methode).val(francaisVersJavanaisRegex(txtATraduire));
	} else if(2==methode){
		$('textarea#txtAreaJavanais_'+methode).val(francaisVersJavanaisRecursivite(txtATraduire));
	}
}


/*
* Fonction lancant la trduction javanais vers francais
*/
function traduireEnFrancais(methode) {
	var txtATraduire = $('textarea#txtAreaJavanais_'+methode).val();
	if(1==methode){
		$('textarea#txtAreaFrancais_'+methode).val(javanaisVersFrancaisRegex(txtATraduire));
	}else if(2==methode){
		$('textarea#txtAreaFrancais_'+methode).val(javanaisVersFrancaisRecursivite(txtATraduire));
	}
}
