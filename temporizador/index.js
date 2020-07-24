var iptNome = document.getElementById('iptNome');
var nome = document.getElementById('nome');

var iptDate = document.getElementById('iptData');
var data = document.getElementById('data');

var tempo = document.getElementById('tempo');
var btnIniciar = document.getElementById('iniciar');
var btnLimpar = document.getElementById('limpar');


btnIniciar.addEventListener('click', function (e) {
    e.preventDefault();
    nome.innerHTML = `Nome do evento: ${iptNome.value}`;
    data.innerHTML = `Data do evento: ${iptDate.value}`;
    calcTempo();
})

//converter a data
function convData() {
    let dateHoje = new Date();
    let dataEvento = new Date(iptDate.value);
    const result = (((dataEvento.getTime() - dateHoje.getTime()) / 1000));
    console.log(result);
    return result.toFixed(0);
}

//calcular o tempo
function calcTempo(t) {
    t = convData();

    tempo.innerHTML = `Tempo: ${t--}`;

    let contTempo = setInterval(function () {
        tempo.innerHTML = `Tempo: ${t--}`;

        if (t === 0) {
            clearInterval(contTempo);
        }
    }, 1000)
}


