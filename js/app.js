const images = document.querySelectorAll("img");
images.forEach(noDrag)

function noDrag(item, index, arr){
  arr[index].setAttribute("draggable", false);
  console.log("here");
}



let nav = document.querySelector('.neww');
let hidden = document.querySelector('.hidden_nav');
let close = document.querySelector('.remove');
let link = document.querySelectorAll('.nav-link');
nav.addEventListener('click', function () {
        hidden.style.left = '0';
})
close.addEventListener('click',function(){
        hidden.style.left = '-100%';
})
link.forEach(function (link) {
        link.addEventListener('click',function(){
                hidden.style.left = '-100%';
        })
})


// // images carousel
// const track = document.getElementById("image-track");
// track.addEventListener("mouseover",(e)=>{
// document.onmousemove = e => {
//     const x = (e.clientX / window.innerWidth)*100;

//     track.animate({
//           transform: `translateX(-${100-x}%)`
//         }, { duration: 3000, fill: "forwards" });

//     for(const image of track.getElementsByClassName("image")) {
//       image.animate({
//           objectPosition: `${100-x}% center`
//       }, { duration: 1200, fill: "forwards" });
//       }
// }

// const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

// const handleOnUp = () => {
// track.dataset.mouseDownAt = "0";  
// track.dataset.prevPercentage = track.dataset.percentage;
// }

// const handleOnMove = e => {
// if(track.dataset.mouseDownAt === "0") return;

// const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
//       maxDelta = window.innerWidth / 2;

// const percentage = (mouseDelta / maxDelta) * -100,
//       nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
//       nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);

// track.dataset.percentage = nextPercentage;

// track.animate({
//   transform: `translateX(${nextPercentage}%)`
// }, { duration: 1200, fill: "forwards" });

// for(const image of track.getElementsByClassName("image")) {
//   image.animate({
//     objectPosition: `${100 + nextPercentage}% center`
//   }, { duration: 1200, fill: "forwards" });
// }
// }

// /* -- Had to add extra lines for touch events -- */

// window.onmousedown = e => handleOnDown(e);

// window.ontouchstart = e => handleOnDown(e.touches[0]);

// window.onmouseup = e => handleOnUp(e);

// window.ontouchend = e => handleOnUp(e.touches[0]);

// window.onmousemove = e => handleOnMove(e);

// window.ontouchmove = e => handleOnMove(e.touches[0]);

// })


// JS for time line---------------------------------------- 

const tCards = document.querySelectorAll('.timeline_card');
const x = new Date();
let xDate = x.getDate();
let xMonth = x.getMonth();
let xTime = x.getHours();

if(((xDate >= 20 && xDate <=31) && xMonth === 0) 
    ||
    ((xDate >= 1 && xDate <=26) && xMonth === 1)
  ){
  tCards[0].setAttribute("class", "timeline_card timeline_active")
  tCards[1].setAttribute("class", "timeline_card")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card")
  }

else if((xDate >= 26 && xDate <=28) && xMonth === 1
        || 
        (xDate < 10 && xMonth === 2)){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card timeline_active")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card")
  }

else if(
        (xDate === 10 && xMonth === 2 && xTime < 14)
  ){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card")
  tCards[2].setAttribute("class", "timeline_card timeline_active")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card")
  }

else if((xDate === 10 && xMonth === 2 && xTime >= 14 && xTime <= 15)){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card timeline_active")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card")
  }
else if((xDate === 10 && xMonth === 2 && xTime >= 15 && xTime <= 20)){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card timeline_active")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card")
  }
else if((xDate === 11 && xMonth === 2 && xTime <= 09)){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card timeline_active")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card")
  }
else if((xDate === 11 && xMonth === 2 && xTime >09 && xTime <= 13)){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card timeline_active")
  tCards[7].setAttribute("class", "timeline_card")
  }
else if((xDate === 11 && xMonth === 2 && xTime >13 && xTime <= 17)){
  tCards[0].setAttribute("class", "timeline_card")
  tCards[1].setAttribute("class", "timeline_card timeline_active")
  tCards[2].setAttribute("class", "timeline_card")
  tCards[3].setAttribute("class", "timeline_card")
  tCards[4].setAttribute("class", "timeline_card")
  tCards[5].setAttribute("class", "timeline_card")
  tCards[6].setAttribute("class", "timeline_card")
  tCards[7].setAttribute("class", "timeline_card timeline_active")
  }


// -----------------------------------------------------------------------------------------------------------------


(function timer() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;
  
  
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy,
      dayMonth = "3/10/",
      birthday = dayMonth + yyyy;
  
    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth + nextYear;
    }
    //end
  
    const countDown = new Date(birthday).getTime(),
      x = setInterval(function () {
  
        const now = new Date().getTime(),
          distance = countDown - now;
            // console.log(distance/(day));
        document.getElementById("days").innerText = pad(Math.floor(distance / (day)));
        document.getElementById("hours").innerText = pad(Math.floor((distance % (day)) / (hour)));
        document.getElementById("minutes").innerText = pad(Math.floor((distance % (hour)) / (minute)));
        document.getElementById("seconds").innerText = pad(Math.floor((distance % (minute)) / second));
  
        //do something later when date is reached
        if (distance < 0) {
          document.getElementById("days").innerText = "00";
          document.getElementById("hours").innerText = "00";
          document.getElementById("minutes").innerText = "00";
          document.getElementById("seconds").innerText = "00";
          // document.getElementById("countdown").innerText = "Event is Over!";
         
          clearInterval(x);
        }
        //seconds
      }, 0)
  }());

function pad(number) {
    return ("0" + number).slice(-2);
}



const $ = str => document.querySelector(str);
const $$ = str => document.querySelectorAll(str);



// jQuery(document).ready(function($) {
//     //  TESTIMONIALS CAROUSEL HOOK
//     $('#customers-testimonials').owlCarousel({
//         loop: true,
//         center: true,
//         items: 3,
//         margin: 0,
//         autoplay: true,
//         dots:true,
//         autoplayTimeout: 8500,
//         smartSpeed: 450,
//         responsive: {
//           0: {
//             items: 1
//           },
//           768: {
//             items: 2
//           },
//           1170: {
//             items: 3
//           }
//         }
//     });
// });
     
// --------------------------------------------------------------------------------------------------------------


