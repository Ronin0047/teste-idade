/** @jest-environment jsdom */

const { validarIdade } = require("./script")

test ("maior", function(){
    var maior = validarIdade("18");
    expect (maior).toBe(true);

} )

test ("menor", function () {
    var menor = validarIdade("17");
    expect(menor).toBe(false);
})