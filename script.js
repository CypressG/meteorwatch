

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
    answer = clock("January 31 2021 23:59:59 GMT+0200")

    
    setInterval(alert(answer.seconds),10);
});
