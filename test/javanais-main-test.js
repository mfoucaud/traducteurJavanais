var expect = require("chai").expect;
var traducteur = require("../js/javanais-main");

describe("Tradcuteur francais<->javanais", function(){

	describe("Traducteur via regexp", function(){

		it("convertit de francais a javanais", function() {
			var jBonjour   = traducteur.francaisVersJavanais("bonjour");
			var jChante = traducteur.francaisVersJavanais("chante");
			var jMoyen  = traducteur.francaisVersJavanais("moyen");
			var jExemple  = traducteur.francaisVersJavanais("exemple");
			var jAu  = traducteur.francaisVersJavanais("au");
			var jLarch  = traducteur.francaisVersJavanais("Et maintenant quelque chose de complètement différent, le mélèze");

			expect(jBonjour).to.equal("bavonjavour");
			expect(jChante).to.equal("chavantave");
			expect(jMoyen).to.equal("mavoyen");
			expect(jExemple).to.equal("avexavemplave");
			expect(jAu).to.equal("avau");
			expect(jLarch).to.equal("avEt mavaintavenavant qavuelqavue chavosave dave cavomplavètavemavent daviffavéravent, lave mavélavèzave");
		});

		it("convertit de javanais a francais", function() {
			var fBonjour   = traducteur.javanaisVersFrancais("bavonjavour");
			var fChante = traducteur.javanaisVersFrancais("chavantave");
			var fMoyen  = traducteur.javanaisVersFrancais("mavoyen");
			var fExemple  = traducteur.javanaisVersFrancais("avexavemplave");
			var fAu  = traducteur.javanaisVersFrancais("avau");
			var fLarch  = traducteur.javanaisVersFrancais("avEt mavaintavenavant qavuelqavue chavosave dave cavomplavètavemavent daviffavéravent, lave mavélavèzave");
			expect(fBonjour).to.equal("bonjour");
			expect(fChante).to.equal("chante");
			expect(fMoyen).to.equal("moyen");
			expect(fExemple).to.equal("exemple");
			expect(fLarch).to.equal("Et maintenant quelque chose de complètement différent, le mélèze");
		});
	});

	describe("Traducteur via recursive", function(){

		it("convertit de francais a javanais (recursive)", function() {
			var jBonjour   = traducteur.francaisVersJavanaisRecursive("bonjour");
			var jChante = traducteur.francaisVersJavanaisRecursive("chante");
			var jMoyen  = traducteur.francaisVersJavanaisRecursive("moyen");
			var jExemple  = traducteur.francaisVersJavanaisRecursive("exemple");
			var jAu  = traducteur.francaisVersJavanaisRecursive("au");
			var jLarch  = traducteur.francaisVersJavanaisRecursive("Et maintenant quelque chose de complètement différent, le mélèze");

			expect(jBonjour).to.equal("bavonjavour");
			expect(jChante).to.equal("chavantave");
			expect(jMoyen).to.equal("mavoyen");
			expect(jExemple).to.equal("avexavemplave");
			expect(jAu).to.equal("avau");
			expect(jLarch).to.equal("avEt mavaintavenavant qavuelqavue chavosave dave cavomplavètavemavent daviffavéravent, lave mavélavèzave");
		});

		it("convertit de javanais a francais (recursive)", function() {
			var fBonjour   = traducteur.javanaisVersFrancaisRecursive("bavonjavour");
			var fChante = traducteur.javanaisVersFrancaisRecursive("chavantave");
			var fMoyen  = traducteur.javanaisVersFrancaisRecursive("mavoyen");
			var fExemple  = traducteur.javanaisVersFrancaisRecursive("avexavemplave");
			var fAu  = traducteur.javanaisVersFrancaisRecursive("avau");
			var fLarch  = traducteur.javanaisVersFrancaisRecursive("avEt mavaintavenavant qavuelqavue chavosave dave cavomplavètavemavent daviffavéravent, lave mavélavèzave");
			expect(fBonjour).to.equal("bonjour");
			expect(fChante).to.equal("chante");
			expect(fMoyen).to.equal("moyen");
			expect(fExemple).to.equal("exemple");
			expect(fLarch).to.equal("Et maintenant quelque chose de complètement différent, le mélèze");
		});

	});

})
