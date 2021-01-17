

window.addEventListener("DOMContentLoaded", function(event){
    function earliest(){
        const date = Date.parse(new Date());
        var earliest = 291250430000;
        var earliest_id;
        var item;
        for (var i = 0; i < data["Showers"].length;i++){
            item = Date.parse(new Date(data["Showers"][i].Date))
            console.log((item - date))
            if ((item - date) < earliest && (item - date) > 0){
                earliest = item - date
                earliest_id = i
            }
        }
        return earliest_id
        }
    const first = earliest()
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
    var meteor = data.Showers[first]
    function changeClock(){
        let answer = clock(meteor["Date"])
        document.getElementById("Days").innerHTML = answer.days;
        document.getElementById("Hours").innerHTML = answer.hours;
        document.getElementById("Minutes").innerHTML = answer.minutes;
        document.getElementById("Seconds").innerHTML = answer.seconds;   
    }
    function fillInformation(){
        document.getElementById("Name").innerHTML = meteor["Name"];
        document.getElementById("POO").innerHTML = meteor["POO"];
        document.getElementById("Mph").innerHTML = meteor["Mph"];
        document.getElementById("Viewing").innerHTML = meteor["Viewing"];
        document.getElementById("Comet").innerHTML = meteor["Comet"];
        document.getElementById("Date").innerHTML = meteor["Date"];
    }
    fillInformation()
    setInterval(changeClock,100);
});
