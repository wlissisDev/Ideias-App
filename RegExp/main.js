// //sequencia de caracteres que definem um padrao de pesquisa.

// //saber se existe a letra 'a' em uma string
// const regexp = /a/;
// console.log('1');
// console.log(/a/.test("wlissis"));
// console.log('2');
// console.log(/W/.test("wlissis"));


// //nesse caso retorna um array com posição da letra
// console.log("wlissis".match(/s/));

// console.log('3');
// console.log("ola".match(regexp)); //outra forma usando variável

// console.log('4');
// console.log("Wlissis".match(/w|e/i))// | -> contenha 'w' ou 'e'

// console.log('5');
// console.log("Wlissis".match(/[rei]/i))// [] mesma função do |

// console.log('6');
// console.log("Wlissis".match(/^[ei]/i))// ^ -> começa com 'e' ou 'w'

// console.log('7');
// console.log("Wlissis".match(/[^wls]/i))// [^]-> não quero as letras 'wls'

// console.log('8');
// console.log("Wlissis".match(/s$/i)); // $ -> termina com 's'

console.log("exemplo 01---------------")
const regExp = /9999-9999/;
const telefone = "9999-9999";

console.log(regExp.exec(telefone));
console.log(regExp.test(telefone));

console.log("exemplo 02---------------")
const regExp1 = /\(48\) 9999-9999/;
const telefone1 = "O telefone é: (48) 9999-9999, tratar com joao";
// \ é usado para escapar de caracteres especiais
console.log(regExp1.test(telefone1));

console.log("exemplo 03---------------")
//trava o inicio ^ e o fime $
const regExp2 = /^\(48\) 9999-9999$/;
const telefone2 = "O telefone é: (48) 9999-9999";

console.log(regExp2.exec(telefone2));
console.log(regExp2.test(telefone2));

console.log("exemplo 04---------------")
// range de números que eu posso aceitar
const regExp3 = /\([0-9][0-9]\) [0-9][0-9][0-9][0-9]-[0-9][0-9][0-9][0-9]/;
const telefone3 = "O telefone é: (48) 9999-9999";

console.log(regExp3.exec(telefone3));
console.log(regExp3.test(telefone3));

console.log("exemplo 05-------------")
// forma refatorada de range de caracteres
//{n,m} de n até m caracteres
const regExp4 = /\([0-9]{2}\) [0-9]{4,5}-[0-9]{4}/;
const telefone4 = "O telefone é: (48) 9999-9999";

console.log(regExp4.exec(telefone4));
console.log(regExp4.test(telefone4));

//quantificadores
// ? zero ou um
//* zero ou mais
// + um ou mais

console.log("exemplo 06-------------")
const regExp5 = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/;
const telefone5 = "(48) 99999999";
//-? ifem é opcional com a interrogação
console.log(regExp5.exec(telefone5));
console.log(regExp5.test(telefone5));

//se o numero estiver em uma tabela
console.log("exemplo 07-------------")
const regExp6 = /<table><tr><td>\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}<\/td><\/tr><\/table>/;
const telefone6 = "<table><tr><td>(48) 9999-9999 </td></tr></table>";
console.log(regExp6.test(telefone6));

//STRING API

// i -> case-insensitive matching
// g -> global matching
// m -> multiline matching

//usa o '/g' para percorrer todos os numeros
console.log("exemplo 08-------------")
const regExp8 = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/g;
const telefone8 = "(85) 9999-9999, (45) 1224-1554, (87) 7787-5544";
console.log(telefone8.match(regExp8));

//troca a busca da expressao por uma string
console.log("exemplo 09-------------")
const regExp9 = /\([0-9]{2}\) [0-9]{4,5}-?[0-9]{4}/g;
const telefone9 = "(85) 9999-9999, (45) 1224-1554, (87) 7787-5544";
console.log(telefone9.replace(regExp9, "telefone"));