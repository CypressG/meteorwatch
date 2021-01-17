

window.addEventListener("DOMContentLoaded", function(event){
    function clock(end){
        const total = Date.parse(end) - Date.parse(new Date());
        const seconds = Math.floor((total/1000)% 60);
        const minutes = Math.floor((total/1000/60)% 60);
        const hours = Math.floor((total/(1000*60*60))%24);
        const days = Math.floor((total/(1000*60*60*24)));
        return {
            seconds,
            minutes,
            hours,
            days
        }
    }
    function changeClock(){
        meteor = data.Showers[1]
        let answer = clock(meteor.Date)
        document.getElementById("Days").innerHTML = answer.days;
        document.getElementById("Hours").innerHTML = answer.hours;
        document.getElementById("Minutes").innerHTML = answer.minutes;
        document.getElementById("Seconds").innerHTML = answer.seconds;
        document.getElementById("Name").innerHTML = meteor.Name;
        document.getElementById("POO").innerHTML = meteor.POO;
        document.getElementById("Mph").innerHTML = answer.seconds;

    }
    setInterval(changeClock,100);
});
