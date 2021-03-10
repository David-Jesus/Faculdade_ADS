$(function() {

    $("#txt").val("texto teste jquery pelo id");
    $(".email").val("Texto jquery pela classe");

    //É possivel alterar todos os elemento de um mesmo tipo sem usar id ou clase, podendo colocar outro elmentos 
    //como por exemplo os elementos p e li o :no() é para deixar o elemento que não vai se alterar pela classe/id
    // $("p:not(.destaque),li").css("opacity", ".50");
    // $("p,li").css("color", "#999");
    // $(".container > ul > li").css("color", "blue");

    // $(".destaque + p").addClass("destaque");

    // //Irá aplcar em todos os próximos irmão do elemento de classe destaque
    $(".destaque ~ p").addClass("destaque");

    //Aplica o css no primeiro elemento li
    $("li:first").css("color", "green");

      //Aplica o css no primeiro filho do elemento li
    $("li:first-child").css("color", "green");

      //Aplica o css no último filho do elemento li
      $("li:last-child").css("color", "green");

      //Aplica o css no último elemento li
    $("li:last").css("color", "green");


    $("p:lt(2)").css({"color":"red", fontSize: "22px"});

    //Aplica o css em todos elemntos 'a' com o atributo 'title';
    $("a[title]").css("color", "red");

    //Aplica o css em todos elemntos 'a' sem o atributo 'title';
    $("a:not([title])").hide();

    //Aplica Css em todos os elementos pares do arayy de 'li'
    $("li:odd").css("backgroundColor", "#ccc");

    //Aplica Css em todos os elementos ímparespares do arayy de 'li'
    $("li:even").css("backgroundColor", "gray");

     //Aplica Css em todos os elementos p que possuem o texto/vlor 'afo 6';
    $("p:contains(afo 6)").css("color", "orange");
    $("p:contains(afo 7)").css("color", "red");

    //Alica o css em elementos p que contém o elemento/tag 'i';
    $("p:has(i)").css("color", "blue");

    //Aplica o csss em elementos p que estão vazio
    $("p:empty").text("Este parágrafo estava vazio");


    $("p:hidden").show();



});