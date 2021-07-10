$(document).ready(function(){
  var opcao1, opcao2, opcao3, opcao4, opcao5;
  var numero = 0;

  $(".opcao1").hide();
  $(".opcao2").hide();
  $(".opcao3").hide();
  $(".opcao4").hide();
  $(".opcao5").hide();

  $("button#botao").click(function(){
    if($(".opcao1").is(":hidden")){
      opcao1 = $.trim($("#textareaOpcao").val());
      $("#textareaOpcao").val("");

      if(opcao1 != ""){
        $(".opcao1").show();
        $("#txtOpcao1").text(opcao1);
        numero++;
      }
    }if($(".opcao1").is(":visible") && $(".opcao2").is(":hidden")){
      opcao2 = $.trim($("#textareaOpcao").val());
      $("#textareaOpcao").val("");  

      if(opcao2 != ""){
        $(".opcao2").show();
        $("#txtOpcao2").text(opcao2);
        numero++;
      }
    }if($(".opcao1").is(":visible") && $(".opcao2").is(":visible") && $(".opcao3").is(":hidden")){
      opcao3 = $.trim($("#textareaOpcao").val());
      $("#textareaOpcao").val("");  

      if(opcao3 != ""){
        $(".opcao3").show();
        $("#txtOpcao3").text(opcao3);
        numero++;
      }
    }if($(".opcao1").is(":visible") && $(".opcao2").is(":visible") && $(".opcao3").is(":visible") && $(".opcao4").is(":hidden")){
      opcao4 = $.trim($("#textareaOpcao").val());
      $("#textareaOpcao").val("");  

      if(opcao4 != ""){
        $(".opcao4").show();
        $("#txtOpcao4").text(opcao4);
        numero++;
      }
    }if($(".opcao1").is(":visible") && $(".opcao2").is(":visible") && $(".opcao3").is(":visible") && $(".opcao4").is(":visible") && $(".opcao5").is(":hidden")){
      opcao5 = $.trim($("#textareaOpcao").val());
      $("#textareaOpcao").val("");  

      if(opcao5 != ""){
        $(".opcao5").show();
        $("#txtOpcao5").text(opcao5);
        numero++;
      }
    }if($(".opcao1").is(":visible") && $(".opcao2").is(":visible") && $(".opcao3").is(":visible") && $(".opcao4").is(":visible") && $(".opcao5").is(":visible")){
      $("#add").hide();
    }
  });

  $("button#fechar1").click(function(){
    $(".opcao1").hide();
    opcao1 = "";
    $("#add").show();
    $("#txtOpcao1").text("");
    numero--;
  });

  $("button#fechar2").click(function(){
    $(".opcao2").hide();
    opcao2 = "";
    $("#add").show();
    $("#txtOpcao2").text("");
    numero--;
  });

  $("button#fechar3").click(function(){
    $(".opcao3").hide();
    opcao3 = "";
    $("#add").show();
    $("#txtOpcao3").text("");
    numero--;
  });

  $("button#fechar4").click(function(){
    $(".opcao4").hide();
    opcao4 = "";
    $("#add").show();
    $("#txtOpcao4").text("");
    numero--;
  });

  $("button#fechar5").click(function(){
    $(".opcao5").hide();
    opcao5 = "";
    $("#add").show();
    $("#txtOpcao5").text("");
    numero--;
  });

  $("button#btnEscolher").click(function(){
    var opcao = [];
    var aleatorio = Math.floor(Math.random() * numero);
    opcao[0] = $("#txtOpcao1").text();
    opcao[1] = $("#txtOpcao2").text(); 
    opcao[2] = $("#txtOpcao3").text();
    opcao[3] = $("#txtOpcao4").text();
    opcao[4] = $("#txtOpcao5").text();

    opcao = opcao.filter(Boolean);
    for (let i = opcao.length -1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let k = opcao[i];
      opcao[i] = opcao[j];
      opcao[j] = k;
    }
    
    if(numero == 0)
      alert("Você não deu nenhuma opção!"); 
    if(numero == 1)
      alert("Dê mais uma opção!");
    if(numero >= 2)
      alert(opcao[aleatorio]);
  });
});