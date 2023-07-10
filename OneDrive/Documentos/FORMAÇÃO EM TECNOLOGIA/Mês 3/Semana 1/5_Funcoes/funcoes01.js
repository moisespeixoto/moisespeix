function presente(dinheiro, valor){
    if (dinheiro < valor){
        return 'Não vai dar para comprar'
    } else{
        return 'Você realmemte precisa desta compra?'
    }
}
let x = presente(150, 90)
console.log(x)
