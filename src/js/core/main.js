$(document).ready(function () {
    let jackpot = 18818966;
    let jackpotCount = document.getElementById('jackpot-count');
    let jackpotCountFirst = document.createElement('div');
    jackpotCountFirst.className = "item-count dollars";

    setInterval(() => {
        jackpotCount.innerHTML = "";
        let parsStr = jackpot.toString();
        jackpotCountFirst.innerText = '$';
        for (let i = 0; i < parsStr.length; i++) {
            let rez = parsStr[i];
            let itemCount = document.createElement('div')
            itemCount.className = "item-count";
            itemCount.innerHTML = rez;
            jackpotCount.insertBefore(jackpotCountFirst, jackpotCount.firstChild)
            jackpotCount.appendChild(itemCount)
        }
        jackpot++

     }, 100);

     $('.slider-gallery').slick({
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay:true,
         autoplaySpeed: 2000,
         // centerMode: true,
         nextArrow: '<button id="next" type="button" class="next">' + '</button>',
         prevArrow: '<button id="prev" type="button" class="prev">' + '</button>',
         responsive: [
             {
                 breakpoint: 1385,
                 settings: {
                     slidesToShow: 3,
                     slidesToScroll: 1
                 }
             },
             {
                 breakpoint: 992,
                 settings: {
                     slidesToShow: 2,
                     slidesToScroll: 1
                 }
             },
             {
                 breakpoint: 768,
                 settings: {
                     arrows: true,
                     autoplay:true,
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     autoplaySpeed: 2000,
                 }
             }
         ]

     });

});



