$(function () {

    const buttton = $('.btn');
    const selectA = $('.opcoes1');
    const selectB = $('.opcoes2');
    var valorResultado;
    var input_valor;
    var item1 = "ARS";
    var item2 = "ARS";


    selectA.on('change', e => {
        item1 = $('.opcoes1').val();
    })

    selectB.on('change', e => {
        item2 = $('.opcoes2').val();
    })

    buttton.on('click', e => {
        input_valor = $('#valor').val();
        $('.resultado').val("Convertendo...");




        var de_para = `${item1}_${item2}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=ae030af9b772b6860122`;


        $.ajax(url, {
            type: 'GET',
            error: function () {
                $('.resultdo').after('Deu ruim');
            },
            success: function (dados) {
                calculo(dados);
            },
            
        })

        function calculo(dados) {
            $.each(dados, function (i, el) {
                let cotacao = el;
                let valor = (parseFloat(input_valor) * cotacao).toFixed(2);

                if (isNaN(valor)) {
                    valorResultado = '0';
                }else if (valor < 0){
                    $('.resultado').val("");
                    alert("Digte um valor válido!")
                    
                }
                 else {
                    valorResultado = valor;
                }
                mostrarDados(valorResultado.valueOf());
            });

            function mostrarDados(dados) {
                $('.resultado').val(dados);
            }
        }
    })
})