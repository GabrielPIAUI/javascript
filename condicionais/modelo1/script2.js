function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fullAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fullAno.value.length == 0 || Number(fullAno.value > ano)) {
        alert('[ERROR] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fullAno.value)
        //res.innerHTML = `Idade calculada ${idade}`

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade <10) {
                //criança
                img.setAttribute('src', 'foto-crianca-m.png')
            } else if (idade < 21) {
                //jovem
            } else if (idade <50) {
                //adulto
            } else {
                //idoso
            }
        } else if (fsex[1]) {
            genero = 'Mulher'
        }
        res.innerHTML = `Detectamos um ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}

