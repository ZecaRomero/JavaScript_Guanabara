var agora = new Date()
var diaSem = agora.getDay()

/* DIAS DA SEMANA 

0 = DOMINGO
1 = SEGUNDA
2 = TERÇA
3 = QUARTA
4 = QUINTA
5 = SEXTA
6 = SABADO

*/

// console.log(diaSem)

switch(diaSem){  //switch mto importante para testas dados pontuais 0..1..2..3..so funciona com numero inteiros ou caracteres

    case 0:
    console.log('Domingo')
    break

    case 1:
        console.log('Segunda')
        break

    case 2:
        console.log('Terça')
         break
    
    case 3:
        console.log('Quarta')
        break
    
    case 4:
        console.log('Quinta')
        break

    case 5:
        console.log('Sexta')
        break

    case 6: 
    console.log('Sabado')
    break

    default:
        console.log('[ERRO Dia Invalido: ' )
            
}