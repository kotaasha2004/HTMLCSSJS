
const Start=document.getElementById("start");
const Stop=document.getElementById("stop");
const Reset=document.getElementById("reset");
const Timer=document.getElementById("timer");
let timeleft=1500;
let interval;
function updateTimer()
{
    let minute=Math.floor(timeleft/60);
    let second=timeleft%60;
    let format='${minute.toString().padStart(2,"0"):$second.toString().padStart(2,"0")';
    Timer.innerHTML=format;   
                

}
function  startTimer(){
    interval=setInterval(()=>{
        timeleft--;
        updateTimer();
        if(timeleft===0)
        {
            alert("Time up");
            timeleft=1500;
        }
    },1000)

}
function stopTimer(){
    clearInterval(interval);
}
function resetTimer(){
    clearInterval(interval);
    timeleft=1500;
    updateTimer();
}
Start.addEventListener('click',startTimer());
Stop.addEventListener('click',stopTimer());
Reset.addEventListener('click',resetTimer());

