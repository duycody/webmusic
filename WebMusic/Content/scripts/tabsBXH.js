window.addEventListener('DOMContentLoaded', () => {
    var moreSong = document.getElementById('more__newSong');
    var moreSongContent = document.getElementById('more__newSong--content');
    var bxhSongNational = document.querySelectorAll('.bxhSong-national');
    var bxhSongTop = document.querySelectorAll('.bxhSong');
    var bars = document.querySelector('.bars');
    var menuMobile = document.querySelector('.menu__mobile');

    function addMore() {
        if (moreSongContent.style.display == 'block') {
            moreSongContent.style.display = 'none';
            moreSong.innerText = "Xem Thêm...";
        } else {
            moreSongContent.style.display = 'block';
            moreSong.innerText = "Thu Gọn";
        }
    }
    function clickBtnBXHSongNational() {
        for (let i = 0; i < bxhSongNational.length; i++) {
            bxhSongNational[i].addEventListener('click', activeBXHSongNational);
        }
    }
    function activeBXHSongNational(e) {
        for (let i = 0; i < bxhSongTop.length; i++) {
            bxhSongTop[i].style.display = "none";
            if (bxhSongNational[i].classList.contains('active')) {
                bxhSongNational[i].classList.remove('active');
            }
        }
        e.target.classList.add('active');
        document.getElementById(e.target.getAttribute('data-target')).style.display = "block";
        console.log(e.target.getAttribute('data-target'));
    }
    function openMenuMobile() {
        if (menuMobile.style.display == "block") {
            menuMobile.style.display = "none";
        } else {
            menuMobile.style.display = "block";
        }
    }
    function init() {
        moreSong.addEventListener('click', addMore);
        bars.addEventListener('click', openMenuMobile);
        clickBtnBXHSongNational();
    }
    init();
});