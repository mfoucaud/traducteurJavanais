var expect = require("chai").expect;
var traducteur = require("../js/javanais-main");

describe("Tradcuteur javanais-francais", function(){

	describe("Traducteur via recursive francais->javanais", function(){

		it("convertit de francais a javanais", function() {
			var jBonjour   = traducteur.francaisVersJavanais("bonjour");
			var jChante = traducteur.francaisVersJavanais("chante");
			var jMoyen  = traducteur.francaisVersJavanais("moyen");
			var jExemple  = traducteur.francaisVersJavanais("exemple");
			var jAu  = traducteur.francaisVersJavanais("au");

			expect(jBonjour).to.equal("bavonjavour");
			expect(jChante).to.equal("chavantave");
			expect(jMoyen).to.equal("mavoyen");
			expect(jExemple).to.equal("avexavemplave");
			expect(jAu).to.equal("avau");
		});
	});

	describe("Traducteur via regexp javanais->francais", function(){

		it("convertit de javanais a francais", function() {
			var fBonjour   = traducteur.javanaisVersFrancais("bavonjavour");
			var fChante = traducteur.javanaisVersFrancais("chavantave");
			var fMoyen  = traducteur.javanaisVersFrancais("mavoyen");
			var fExemple  = traducteur.javanaisVersFrancais("avexavemplave");
			var fAu  = traducteur.javanaisVersFrancais("avau");

			expect(fBonjour).to.equal("bonjour");
			expect(fChante).to.equal("chante");
			expect(fMoyen).to.equal("moyen");
			expect(fExemple).to.equal("exemple");
			expect(fAu).to.equal("au");
		});

	})

})
