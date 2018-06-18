$(document).ready(function () {

    // $('.slider-gallery').slick();

 let jackpot = 18818966;

 let parsStr = jackpot.toString();
 let jackpotCount = document.getElementById('jackpot-count');
 let jackpotCountFirst = document.createElement('div');
     jackpotCountFirst.className = "item-count dollars";
     jackpotCountFirst.innerHTML = '$';

        for(let i = 0; i<parsStr.length; i++){
            let rez = parsStr[i];
            let itemCount = document.createElement('div')
            itemCount.className = "item-count";
            itemCount.innerHTML = rez;
            jackpotCount.insertBefore(jackpotCountFirst, jackpotCount.firstChild)
            jackpotCount.appendChild(itemCount)

        }
    setInterval(()=>{
        jackpot++
        console.log(jackpot)
    },1000);

});



