
let dic_time = document.getElementById('now')

let intraval1 = setInterval(()=>{
    dic_time.innerHTML = `time now : ${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
},1000)
let timer = document.getElementById("timer")
let endDate = "2023-07-21T12:22:00.000Z"
let end_div = document.getElementById('ends')
end_div.innerHTML = `END TIME :${new Date(endDate)} ${new Date(endDate).getHours()}:${new Date(endDate).getMinutes()}:${new Date(endDate).getSeconds()}`
setInterval(()=>{
    let now_utc = new Date(new Date().toISOString()).getTime()
    let endUtc = new Date(endDate).getTime()
    if(endUtc - now_utc > 0){
        let diff = endUtc - now_utc
        let day = Math.floor((diff/1000) / (60 * 60 * 24))
        let hour = Math.floor(((diff/1000) - day * 86400)/(3600))
        let min =   Math.floor((diff/1000 - day*86400 - hour*3600)/60)
        let sec =   Math.floor((diff/1000)- day*86400 - hour *3600 - min*60)
        timer.innerHTML = `TIMER ____${day}:${hour}:${min}:${sec}`
    }
},1000)