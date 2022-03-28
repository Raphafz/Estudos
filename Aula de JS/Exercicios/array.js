let jogadores = ['Leonardo', 'Milena', 'Bryam'] // Array - variável composta
 
console.log('Lista inicial: ' + jogadores)
 
jogadores[2]='Shay'
 
console.log(jogadores)
 
jogadores.push('Braym')
jogadores.push('Luan')
jogadores.push('Gabriel')
 
console.log(jogadores)
 
console.log('Vão participar ' + jogadores.length + ' jogadores.')
 
 
console.log('Lista em ordem alfabética ' + jogadores.sort())
 
 
 
for(let posicao in jogadores){
    console.log('Posição: ' + posicao +  ' Jogador: ' + jogadores[posicao])
}
 
for(let pos=0; pos < jogadores.length; pos++){
    console.log(' Jogador: ' + jogadores[pos])
 
}
