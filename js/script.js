if (window.SimpleSlide) {
  new SimpleSlide({
    slide: 'banner', // nome do atributo data-slide="principal"
    nav: true,
    time: 5000, // tempo de transição dos slides
  });

  new SimpleSlide({
    slide: 'portfolio',
    time: 5000,
    nav: true,
  });
}

if (window.SimpleAnime) {
  new SimpleAnime();
}

if (window.SimpleForm) {
  new SimpleForm({
    form: '.formphp', // seletor do formulário
    button: '#enviar', // seletor do botão
    erro: "<div id='form-erro'><h2>Erro no envio!</h2><p>Um erro ocorreu, tente para o email contato@bikcraft.com.</p></div>", // mensagem de erro
    sucesso:
      "<div id='form-sucesso'><h2>Formulário enviado com sucesso</h2><p>Em breve eu entro em contato com você.</p></div>", // mensagem de sucesso
  });
}
function onClickMenu() {
  document.getElementById('menu').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}

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
  // console.log(obj);
  // console.log(obj[1]);
  // console.log(obj[2]);
});
