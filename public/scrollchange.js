// script that will ultimately change the color of the scroll bar when the window is scrolled
// vanilla Javascript no react in this file as it is not necessary 

let gcount = false;

const scrollBarchange = () =>{
    const bodyelm = document.querySelector("body");
    if(bodyelm.classList.contains('nonactive')){
        bodyelm.classList.remove('nonactive')
        bodyelm.classList.add('active');
        if(gcount){
            setTimeout(()=>{
                bodyelm.classList.add('nonactive')
                bodyelm.classList.remove('active')
            },350)
        }
    }
}

window.addEventListener("scroll",()=>{
    gcount++;
    scrollBarchange();
});