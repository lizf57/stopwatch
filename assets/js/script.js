function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var btnStart = document.getElementById("btnStart");
    var btnStop = document.getElementById("btnStop");
    var btnReset = document.getElementById("btnReset");
    var interval ;

    btnStart.onclick= function(){
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    btnStop.onclick= function(){
        clearInterval(interval);
    }

    btnReset.onclick=function(){
        clearInterval(interval); 
        tens="00";
        seconds="00"
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }

    function startTimer () {
        tens ++;

        if(tens <= 9){
            appendTens.innerHTML = "0" + tens;
        }
        
    }

}