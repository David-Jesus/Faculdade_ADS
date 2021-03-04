$(function() {
    var nomeJogador;
    var jogador = 1;
    var jogadorVencedor = "";
    var jogadas = 0;

    function colunaIguais (a, b, c) {
        var backgroundA = $("#coluna" +a).css("background-image");
        var backgroundB = $("#coluna" +b).css("background-image");
        var backgroundC = $("#coluna" +c).css("background-image");

        if((backgroundA == backgroundB) && (backgroundB == backgroundC) && (backgroundA != "none" && backgroundA != "")) {
            if (backgroundA.indexOf("1.png") >= 0) {
                nomeJogador = $("#player1").val();
                jogadorVencedor = "1"
            }else {
                jogadorVencedor = "2";
                $("#player1").val()
            }
            return true;
        }else {
            return false;
        }
    }
    
    function verificaFimDeJogo() {
        jogadas++;
        if(colunaIguais(1, 2, 3) || colunaIguais(4, 5, 6) || colunaIguais(7, 8, 9) ||
           colunaIguais(1, 4, 7) || colunaIguais(2, 5, 8) || colunaIguais(3, 6, 9) ||
           colunaIguais(1, 5, 9) || colunaIguais(3, 5, 7)) 
           {
               var image = "url(" + jogador.toString() + ".png)";
                $("#resultado").html("<p> O Player " + nomeJogador +" ganhou! </p>");
               
                var img = document.createElement("img");
                img.src = jogadorVencedor + ".png";
                img.width = '20';
                img.height = '20';
                $("#image").html(img);
                $(".coluna").off("click");
            }
            if(jogadas >= 9){
                $("#resultado").html("<p> Velha :)! </p>")
                $(".coluna").off("click");
            }
        }

       
      $(".coluna").click(function() {
            var bg = $(this).css("background-image");
            if(bg == "none" || bg == "") {
                var fig = "url(" + jogador.toString() + ".png)";
                $(this).css("background", fig);
                jogador = (jogador == 1 ? 2 : 1);
                verificaFimDeJogo();
            }
      });  
});


// // - Incluir o nome do jogador na página
// 	- quando o jogador ganhar, imprimir o nome do jogador
//     - exibir a imagem do jogador que ganhou
//     - informar quando houver empate