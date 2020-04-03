window.addEventListener("DOMContentLoaded", () => {
    // ==== click bars ==== //
    var btnBars = document.querySelector('.bars__btn');
    var nav = document.querySelector('.navbar__nav');
    var menuCollapse = document.querySelector('.menu__collapse');
    var isTrue = true;
    btnBars.addEventListener("click", (e) => {  
        if (isTrue == true) {
            // effect bars
            for (let i = 0; i < btnBars.childElementCount; i++) {
                btnBars.children[i].classList.add("active");                
            }            
            btnBars.children[1].style.opacity = "0"         
            btnBars.children[0].style.transform = "rotate(45deg)";
            btnBars.children[0].style.marginTop = "2px";
            btnBars.children[2].style.transform = "rotate(-45deg)";
            btnBars.children[2].style.marginTop = "-2px";            
            // effect menu collapse
            menuCollapse.style.left = "0";
            menuCollapse.style.transition = ".2s";
            // effect nav
            for (let i = 0; i < nav.childElementCount; i++) {
                setTimeout(() => {
                    nav.children[i].style.transform = "translateX(80px)";
                    nav.children[i].style.transition = ".2s all";
                }, i * 60);
            }            
            isTrue = false;
        } else {
            // effect bars
            for (let i = 0; i < btnBars.childElementCount; i++) {
                btnBars.children[i].classList.remove("active");
                btnBars.children[i].style.transition = ".5s";
            }            
            btnBars.children[1].style.opacity = "1"          
            btnBars.children[0].style.transform = "rotate(0)";
            btnBars.children[0].style.marginTop = "7px";
            btnBars.children[2].style.transform = "rotate(0)";
            btnBars.children[2].style.marginTop = "7px";
            // effect menu collapse
            menuCollapse.style.left = "-420px";
            menuCollapse.style.transition = ".2s";
            // effect nav
            for (let i = 0; i < nav.childElementCount; i++) {
                setTimeout(() => {
                    nav.children[i].style.transform = "translateX(0)";
                    nav.children[i].style.transition = ".2s all";
                }, i * 60);
            }          
            isTrue = true;
        }        
    });
});