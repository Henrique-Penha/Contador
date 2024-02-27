function contar() {
    let i = document.getElementById('txti')
    let f = document.getElementById('txtf')
    let pa = document.getElementById('txtp')
    let res = document.getElementById('res')
    
    if (i.value.length == 0 || f.value.length == 0 || pa.value.length == 0) {
        //alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar'
    } else {
        res.innerHTML = 'Contando: <br>'
        let inicio = Number(i.value)
        let fim = Number(f.value)
        let passo = Number(pa.value)

        if (passo <= 0) {
            window.alert('Passo inválido! Considerando passo 1')
        }

        if(inicio < fim) {
            //Contagem crescente
            for( let c = inicio; c <= fim; c += passo ) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //Contage regressiva
            for(let c = inicio; c >= fim; c -= passo) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }


}