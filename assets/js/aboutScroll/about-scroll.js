let ScrollAbout = document.getElementById('#about_scroll');
let SwipeAbout = new Hammer(ScrollAbout);
let PenY = ScrollAbout.style.touchAction = 'pan-y';
function ScrollsAbout(){
    
    SwipeAbout.get('swipe').set({ direction: Hammer.DIRECTION_VERTICAL});
        
    
 
}

ScrollAbout.addEventListener('scroll',ScrollsAbout);


