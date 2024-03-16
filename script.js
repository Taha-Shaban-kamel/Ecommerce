

setInterval(() => {
    let hours = document.querySelectorAll('.hour');
    let min = document.querySelector('.min').firstChild;
    let sec = document.querySelector(".sec").firstChild;
    let days = document.querySelectorAll('.days');
    const date = new Date();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let dayss = date.getDay() ;
    let hourss = date.getHours();
    min.replaceWith(minutes);
    sec.replaceWith(seconds);
    hours[0].firstChild.replaceWith(hourss)
    days[0].firstChild.replaceWith(dayss);
}, 0);
