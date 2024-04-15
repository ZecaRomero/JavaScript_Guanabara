var idade = 45
console.log (`Voce tem ${idade} anos. `)

if (idade < 16){
    console.log('Voce Nao Vota')

} else if (idade < 18 || idade > 65){ // ! ==>NAO - &&==> E - || ==>OU 
    console.log('Voto é Opcional')
} else {
    console.log('Voto é Obrigatório') 
}