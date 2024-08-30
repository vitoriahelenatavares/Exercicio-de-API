setInterval(exibir_data_hora,1000)


function exibir_data_hora(){
 //instanciandop um novo objeto da classe date   
    let agora = new Date
    
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear()
    let hora = agora.getHours()
    let minuto = agora.getMinutes()
    let segundo = agora.getSeconds()

    document.getElementById('S_dia').innerText = dia >= 10 ? dia +"/" :"0"+ dia +"/"
    document.getElementById('S_mes').innerText = mes >= 10 ?   (mes+1) +"/" : "0"+ (mes+1) +"/" 
    document.getElementById('S_ano').innerText = ano >= 10 ?  ano +" | " : "0" + ano + "|"
    document.getElementById('S_hora').innerText = hora >= 10 ? hora +":" : ":" + hora + ":"
    document.getElementById('S_minuto').innerText = minuto >= 10 ? minuto +":" : "0"+ minuto +":"
    document.getElementById('S_segundo').innerText = segundo >= 10 ? segundo : "0"+ segundo 
}
