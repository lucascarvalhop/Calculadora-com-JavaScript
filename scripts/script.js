let visor = document.querySelector('.resultado');
//variáveis criadas para auxiliar a função de remover somente o último
//numero inserido na calculadora
let numerosArray = [];
let numerosString;

//As funções comentadas abaixo possuem suas ativações com base
//no onclick feito pelo html, por isso não necessitam ser ativadas
//aqui no script

//esta função insere o número digitado no visor e também insere na array
//criada para guardar todos os números inseridos
function insert(n){
    numerosArray.push(n);
    visor.innerHTML = visor.innerHTML + n;
}

//função que apaga todos os números inseridos na calculadora
function clean(){
    visor.innerHTML = '';
    numerosArray = []
}

//função que apaga somente o último número inserido na calculadora
function back(){
    //numerosArray.pop remove o ultimo item da array, ou seja, o último
    //número inserido na calculadora
    numerosArray.pop()
    //a variável numerosString recebe os valores da array convertidos
    //em string
    numerosString = numerosArray.toString()
    //o método abaixo limpa as virgulas que foram convertidas
    //junto da array, deixando a varíavel com somente os números
    numerosString = numerosString.replace(/[,]/g, '');
    //visor.innerHTML exibe no visor o valor atualizado
    //ou seja, com o último item removido, cumprindo o papel da função
    //lembrando que todo o processo é feito em milisegundos, sem que o usuário
    //possa perceber toda essa mudança
    visor.innerHTML = numerosString
    
}

//função que calcula as operações digitadas pelo o usuário
//e exibe na tela o resultado
function calcular(){
    if(visor.innerHTML){
        visor.innerHTML = eval(visor.innerHTML)
    }
}