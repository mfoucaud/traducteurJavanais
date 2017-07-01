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
* Fonction lancant la trduction francais vers javanais
*/
function traduireEnJavanais(methode) {
	var txtATraduire = $('textarea#txtAreaFrancais_'+methode).val();
	if(1==methode){
		$('textarea#txtAreaJavanais_'+methode).val(francaisVersJavanaisRegex(txtATraduire));
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
		$('textarea#txtAreaFrancais_'+methode).val(javanaisVersFrancaisRecursive(txtATraduire));

	}
}
