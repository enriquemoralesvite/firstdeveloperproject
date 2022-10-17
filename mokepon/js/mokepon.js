function iniciarjuego(){
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', selecionarMascotaJugador)
}

function selecionarMascotaJugador(){
   let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    if (inputHipodoge.checked){
        alert('Seleccionaste a Hipodoge')
    } else if (inputCapipepo.checked){
        alert('Seleccionaste a Capipepo')
    } else if(inputRatigueya.checked){
        alert('Seleccionaste a Ratigueya')
    } else {
        alert('No haz seleccionado ninguna mascota')
    }
        
    }


window.addEventListener('load', iniciarjuego)