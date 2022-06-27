 function chegar() {
    var escolha = document.getElementsByName('opcao');

    for(var i in escolha) {
         if (escolha[i].checked) {
            var opcao = escolha[i].value;
         }
             
    }
    localStorage.setItem('opcao', opcao )

    switch (opcao) {
        case 'op1':
            window.location = `../pages/game.html`;
            break;
        case 'op2':
            window.location = `./game2.html`;
            break;
        case 'op3':
            window.location = `./game3.html`;
            break;
    
    }
    
}

