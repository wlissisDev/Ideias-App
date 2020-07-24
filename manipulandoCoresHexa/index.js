const divBoxElement = document.querySelector('div#box');
const corElement = document.querySelector('input#cor');
const rangeEl = document.querySelector('input#lumi');
const labelEl = document.querySelector('label');

rangeEl.addEventListener('input', function (e) {
    e.preventDefault();

    labelEl.innerHTML = `Luminosidade: ${rangeEl.valueAsNumber.toFixed(2)}.`;
    
    try {
        divBoxElement.style.backgroundColor = lumiance(`#${corElement.value}`, rangeEl.valueAsNumber);
    }
    catch (e) {
        console.log("HOUVE UM ERROR: ", e.message);
    }

})






function lumiance(hex, luminosity = 0) {
    //hexa é um valor que vai de 0 a F
    //contém 16 dígito
    //0 = black
    //f = white

    //logica pra converter oo hexadecimal em uma cor mais clara
    //ou mais escura


    hex = hex.replace(/[^0-9a-f]/gi, '');
    const isValidHex = hex.length === 6 || hex.length === 3;
    //se nao for um hexadecimal valido
    if (!isValidHex) throw new Error("Invalid Hex");

    //se for 3 digitos, transformar para 6 digitos
    if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }

    //aplicar uma forma matemática para aumentar ou 
    //diminuir a luminosidade de um hexadecimal

    //preciso transformar o hex em RGB
    //r (red) / g(green) / b(blue)
    //0 = balck
    //255 = white

    const twoDigitGroup = hex.match(/([0-9a-f]){2}/gi);

    let newHex = "#";
    for (let twoDigit of twoDigitGroup) {
        //converte pra hexdecimal
        const numberFromHex = parseInt(twoDigit, 16);
        const calculateLuminosity = numberFromHex + (luminosity * 255);

        //evitar que ultrapasse 0 a 255
        const blackOrLuminosity = Math.max(0, calculateLuminosity);
        const partialColor = Math.min(255, blackOrLuminosity);

        //aredonda o numero se for real
        const newColor = Math.round(partialColor);

        //desconverte o numero de volta para base 16 em string
        const numberToHex = newColor.toString(16);
        const finalHex = `0${numberToHex}`.slice(-2);

        newHex = newHex + finalHex;
    }

    return newHex;
}