
function Actualizar (){
    
    let Reloj = document.getElementById('Reloj');
    const Hora_Actual = new Date();

    const Horas = Hora_Actual.getHours().toString().padStart(2, '0');
    const Minutos = Hora_Actual.getMinutes().toString().padStart(2, '0');
    const Segundos = Hora_Actual.getSeconds().toString().padStart(2, '0');

    Reloj.textContent= `${Horas}:${Minutos}:${Segundos}`
}

Actualizar();

setInterval(Actualizar, 1000);
