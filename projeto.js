function numeroPorExtenso(numero) {
    let valor = numero;

    valor = String(valor)


    let centena
    let dezena
    let unidade


    let centenaExtenso = ""
    let dezenaExtenso = ""
    let unidadeExtenso = ""

    let valorExtenso = ""

    if(valor.length == 3) {
        centena = Number(valor[0])
        dezena = Number(valor[1])
        unidade = Number(valor[2])
        
        if(valor == "100") {
            return valorExtenso = 'Cem'
        }

        switch(centena) {
            case 1: centenaExtenso = 'Cento'
            break;
            case 2: centenaExtenso = 'Duzentos'
            break;
            case 3: centenaExtenso = 'Trezentos'
            break;
            case 4: centenaExtenso = 'Quatrocentos'
            break;
            case 5: centenaExtenso = 'Quinhentos'
            break;
            case 6: centenaExtenso = 'Seiscentos'
            break;
            case 7: centenaExtenso = 'Setecentos'
            break;
            case 8: centenaExtenso = 'Oitocentos'
            break;
            case 9: centenaExtenso = 'Novecentos'
            break;
        }

        switch(dezena) {
            case 2: dezenaExtenso = 'vinte'
            break;
            case 3: dezenaExtenso = 'trinta'
            break;
            case 4: dezenaExtenso = 'quarenta'
            break;
            case 5: dezenaExtenso = 'cinquenta'
            break;
            case 6: dezenaExtenso = 'sessenta'
            break;
            case 7: dezenaExtenso = 'setenta'
            break;
            case 8: dezenaExtenso = 'oitenta'
            break;
            case 9: dezenaExtenso = 'noventa'
            break;
        }
        if(dezena == 1) {
            switch(unidade) {
                case 0: unidadeExtenso = "dez"
                break;
                case 1: unidadeExtenso = "onze"
                break;
                case 2: unidadeExtenso = "doze"
                break;
                case 3: unidadeExtenso = "treze"
                break;
                case 4: unidadeExtenso = "quartoze"
                break;
                case 5: unidadeExtenso = "quinze"
                break;
                case 6: unidadeExtenso = "dezesseis"
                break;
                case 7: unidadeExtenso = "dezessete"
                break;
                case 8: unidadeExtenso = "dezoito"
                break;
                case 9: unidadeExtenso = "dezenove"
                break;
            }
            return valorExtenso = `${centenaExtenso} e ${unidadeExtenso}`
        }

        switch(unidade) {
            case 0: unidadeExtenso = ""
            break;
            case 1: unidadeExtenso = "um"
            break;
            case 2: unidadeExtenso = "dois"
            break;
            case 3: unidadeExtenso = "três"
            break;
            case 4: unidadeExtenso = "quatro"
            break;
            case 5: unidadeExtenso = "cinco"
            break;
            case 6: unidadeExtenso = "seis"
            break;
            case 7: unidadeExtenso = "sete"
            break;
            case 8: unidadeExtenso = "oito"
            break;
            case 9: unidadeExtenso = "nove"
            break;

        }
        
        if(unidade == 0 && dezena == 0) {
            return valorExtenso = `${centenaExtenso}`
        } else if(unidade == 0) {
            return valorExtenso = `${centenaExtenso} e ${dezenaExtenso}`
        } else if(dezena == 0) {
            return valorExtenso = `${centenaExtenso} e ${unidadeExtenso}`
        }
        
        return valorExtenso = `${centenaExtenso} e ${dezenaExtenso} e ${unidadeExtenso}`

    }

}

console.log(numeroPorExtenso(101))

let i = 100
setInterval(function () {
    console.log(numeroPorExtenso(i))
    i = i + 1
}, 2000);
