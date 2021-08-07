/*  em construção

window.onload = function(){
  const botao = document.querySelector("#botao");
  const opcao = document.querySelector("#textareaOpcao");
  var numero = 0;
  var fechar = document.querySelectorAll(".fechar");
  var b;

  for(let i = 0; i < 5; i++){
    var p = document.getElementsByClassName(`opcao${i}`);
    for (var ii = 0; ii < p.length; ii++) {
      p[ii].style.display = "none";
    };
  };

  botao.addEventListener("click", function(){
    if(opcao.value != ""){
      var q = document.getElementsByClassName(`opcao${numero}`);
      q[0].style.display = "inherit";
      document.getElementById(`txtOpcao${numero}`).innerHTML = opcao.value;
      opcao.value = "";
      numero++;
    };
    alert(numero);
  });

  fechar[0].addEventListener("click", function(){
    b = document.getElementsByClassName("opcao0");
    b[0].style.display = "none";
    numero--;
  });

  fechar[1].addEventListener("click", function(){
    b = document.getElementsByClassName("opcao1");
    b[0].style.display = "none";
    numero--;
  });

  fechar[2].addEventListener("click", function(){
    b = document.getElementsByClassName("opcao2");
    b[0].style.display = "none";
    numero--;
  });

  fechar[3].addEventListener("click", function(){
    b = document.getElementsByClassName("opcao3");
    b[0].style.display = "none";
    numero--;
  });

  fechar[4].addEventListener("click", function(){
    b = document.getElementsByClassName("opcao4");
    b[0].style.display = "none";
    numero--;
  });
}
*/