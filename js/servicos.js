// Galeria de fotos
var galeria = document.querySelector('#galeria'); // selecionado div galeria

// function galeriaFotos
function galeriaFotos(categoria, qtd) {
  for (var i = 1; i <= qtd; i++) {
    imagem = new Image(); // cria herança para novos elementos <img>
    var origem = `img/galeria/${categoria}/${i}.jpg`;
    imagem.src = origem; // define a origem da imagem
    galeria.appendChild(imagem); // anexa a imagem na div galeria
    // console.log(imagem);
  }
}
// chamada da função
// galeriaFotos('apartamentos', 3);

// Seleção dos botões
var btFachadas = document.querySelector('#fachadas');
var btInteriores = document.querySelector('#interiores');
var btApartamentos = document.querySelector('#apartamentos');
var btObras = document.querySelector('#obras');
var btGrupogerador = document.querySelector('#grupoGerador');
//array botões
var btArrayBotoes = [
  [btFachadas, 'fachadas', 9],
  [btInteriores, 'interiores', 15],
  [btApartamentos, 'apartamentos', 3],
  [btObras, 'obras', 13],
  [btGrupogerador, 'grupoGerador', 1],
];
// console.log(btArrayBotoes[0][0]);
btArrayBotoes.forEach(function (obj, index) {
  // obj = representa cada linha consumida pelo forEach
  obj[0].onclick = function () {
    galeria.textContent = '';
    galeriaFotos(obj[1], obj[2]);
  };