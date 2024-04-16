function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()

    msg.innerHTML = `Agora são 0${hora}:${min}`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'fotomanha.png'
        document.getElementsByClassName('texto')[0].style.color = 'black'
        document.getElementsByClassName('texto')[1].style.color = 'black'
    } else if (hora >= 12 && hora <= 18) {
        //Boa tarde
        img.src = 'fototarde.png'

    } else {
        //Boa Noite
        img.src = 'fotonoite.png'
    }
}

