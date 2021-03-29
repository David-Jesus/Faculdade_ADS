$(function () {

    const resultado = $('.resultado');
    const buttton = $('.btn');
    const a = $('.opcoes1');
    const b = $('.opcoes2');
    var moedaB_val = 0;
    var moedaA_valor;
    var item1 = "USD";
    var item2 = "BRL";


    a.on('change', e => {
        item1 = $('.opcoes1').val()  ;
    })

    b.on('change', e => {
        item2 = $('.opcoes2').val()  ;
    })

    buttton.on('click', e =>  { 
        moedaA_valor = $('#valor').val();
        resultado.val("Convertendo...");

        let de_para = `${item1}_${item2}`;
        let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=ae030af9b772b6860122`;
        
       
        fetch(url).then(res => {
            return res.json()
        }).then(json => {
            let cotacao = json[de_para];
            let moedaB_valor = (parseFloat(moedaA_valor) * cotacao).toFixed(2);
            
            if(isNaN(moedaB_valor) || moedaB_valor < 0){
                moedaB_val = '0';
            }else{
            moedaB_val = moedaB_valor;
        }
            mostrarDados(moedaB_val.valueOf());
        })

        function mostrarDados(dados) {
           resultado.val(dados);
        }
    })
   
})