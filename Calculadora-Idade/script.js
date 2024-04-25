var encontrarNumero  = 0;
var tentativas = 0;
function refresh(){
    // gera um número aleatório

encontrarNumero = parseInt(Math.random( ) * 100);

    console.log('encontrarNumero');
}

    function verNum(){

        var txt = document.getElementById('txt').value;

        if(txt > 100 || txt < 1)
        {
            alert('Aposta inválida');
            return;
        }

        if(txt > encontrarNumero)
        {
            tentativas++;
            alert('O número para ser encontrado é MENOR')
        }

        else if(txt < encontrarNumero)

        {
            tentativas++
            alert('O número para ser encontrado é MAIOR')
            
        }

        else
        {
        
        
        alert('Parabéns você acertou!! Com '+tentativas+' erros')
       }
     
        

 }

        

    

refresh();