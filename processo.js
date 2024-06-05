function time(){
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    var segundo = data.getSeconds()
    
    msg.innerHTML = `<h1>Agora são ${hora}:${minuto}:${segundo} horas.`
    {
        if (hora >= 3 && hora < 12) {
            img.src = 'fDia.jpg'
            document.body.style.background  = '#8bc1e7'
            msg.style.color = '#8bc1e7'
        } else if (hora >= 12 && hora < 18) {
            img.src = 'fTarde.jpg'
            document.body.style.background = '#e1b901'
            msg.style.color = '#e1b901'
        } else{
            img.src = 'fNoite.jpg'
            document.body.style.background = '#022022'
            msg.style.color = '#022022'
        }
    }
    }
    //chama a função
    time()
    //atualiza a hora a cada 1000 milissegundos 
setInterval(time, 1000)