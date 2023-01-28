// windows drag
let MoveAbout = document.getElementById('move_about');
let MoveWinAbout = document.querySelector('.desktop_win_about');

let MoveFAQ = document.getElementById('move_faq');
let MoveWinFAQ = document.querySelector('.desktop_win_faq');

let MoveRules = document.getElementById('move_rules');
let MoveWinRules = document.querySelector('.desktop_win_rules');

let MoveSchedule = document.getElementById('move_schedule');
let MoveWinSchedule = document.querySelector('.desktop_win_schedule');

let MoveReg = document.getElementById('move_reg');
let MoveWinReg = document.querySelector('.desktop_win_registration');

let MoveAwards = document.getElementById('move_awards');
let MoveWinAwards = document.querySelector('.desktop_win_awards');

let MoveSponsor = document.getElementById('move_sponsor');
let MoveWinSponsor = document.querySelector('.desktop_win_sponsors');

let MoveSocial = document.getElementById('move_social');
let MoveWinSocial = document.querySelector('.desktop_win_social');

let MoveGames = document.getElementById('move_games');
let MoveWinGames = document.querySelector('.desktop_win_games');

DragWindows(MoveAbout, MoveWinAbout);
DragWindows(MoveFAQ, MoveWinFAQ);
DragWindows(MoveRules, MoveWinRules);
DragWindows(MoveSchedule, MoveWinSchedule);
DragWindows(MoveReg, MoveWinReg);
DragWindows(MoveAwards, MoveWinAwards);
DragWindows(MoveSponsor, MoveWinSponsor);
DragWindows(MoveSocial, MoveWinSocial);
DragWindows(MoveGames, MoveWinGames);

function DragWindows(header, windows) {
    header.addEventListener('mousedown', () => {
        DragWinElem(header, windows);
    });
};

function DragWinElem(header, elem){
    elem.onmousedown = function(e){
        let coords = getCoords(elem)
        let shiftX = e.clientX - coords.left;
        let shiftY = e.clientY - coords.top;

        document.body.style.overflow = 'hidden';

        moveAt(e.pageX, e.pageY);
        function moveAt(pageX, pageY) {
            elem.style.left = pageX - shiftX + 'px';
            elem.style.top = pageY - shiftY + 'px';
        }

        function onMouseMove(e) {
            moveAt(e.pageX, e.pageY);
        }
    
        document.addEventListener('mousemove',onMouseMove);

        if (header.id == 'nomove') {
            document.removeEventListener('mousemove', onMouseMove);
            elem.onmouseup = null;
        }

        elem.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            elem.onmouseup = null;
        };
        elem.onmouseleave = function () {
            document.removeEventListener('mousemove', onMouseMove);
            elem.onmouseup = null;
        };
       
    };
    let WinBodyAbout = document.getElementById('about_content');
    let WinBodyFAQ = document.getElementById('faq_content');
    let WinBodyRules = document.getElementById('rules_content');
    let WinBodySchedule = document.getElementById('schedule_content');
    let WinBodyReg = document.getElementById('reg_content');
    let WinBodyAwards = document.getElementById('awards_content');
    let WinBodySponsors = document.getElementById('sponsor_content');
    let WinBodySocial = document.getElementById('social_content');
    let WinBodyGames = document.getElementById('games_content');
    OffDrag(WinBodyAbout);
    OffDrag(WinBodyFAQ);
    OffDrag(WinBodyRules);
    OffDrag(WinBodySchedule);
    OffDrag(WinBodyReg);
    OffDrag(WinBodyAwards);
    OffDrag(WinBodySponsors);
    OffDrag(WinBodySocial);
    OffDrag(WinBodyGames);

    let WinFooterAbout = document.getElementById('about_footer');
    let WinFooterFAQ = document.getElementById('faq_footer');
    let WinFooterRules = document.getElementById('rules_footer');
    let WinFooterSchedule = document.getElementById('schedule_footer');
    let WinFooterAwards = document.getElementById('awards_footer');
    let WinFooterSponosrs = document.getElementById('sponsor_footer');
    let WinFooterSocial = document.getElementById('social_footer');
    let WinFooterGames = document.getElementById('games_footer');

    OffDrag(WinFooterAbout);
    OffDrag(WinFooterFAQ);
    OffDrag(WinFooterRules);
    OffDrag(WinFooterSchedule);
    OffDrag(WinFooterAwards);
    OffDrag(WinFooterSponosrs);
    OffDrag(WinFooterSocial);
    OffDrag(WinFooterGames);
    function OffDrag(win){
        win.onmousedown = function(){
            elem.onmousedown = function(){
                console.log('false');
                // elem.preventDefault();
                return false
            };
        };
    };

    elem.ondragstart = function() {
        return false;
    };

    function getCoords(elem) {  
        var box = elem.getBoundingClientRect();
        return {
          top: box.top + pageYOffset,
          left: box.left + pageXOffset
        };
    };
};




let MoveAboutSh = document.getElementById('about_sh');
let MoveFAQSh = document.getElementById('faq_sh');
let MoveRulesSh = document.getElementById('rules_sh');
let MoveScheduleSh = document.getElementById('schedule_sh');
let MoveRegSh = document.getElementById('reg_sh');
let MoveAwardsSh = document.getElementById('awards_sh');
let MoveSponsorsSh = document.getElementById('sponsor_sh');
let MoveSocialSh = document.getElementById('social_sh');
let MoveGamesSh = document.getElementById('games_sh');
DragShortcutElem(MoveAboutSh);
DragShortcutElem(MoveFAQSh);
DragShortcutElem(MoveRulesSh);
DragShortcutElem(MoveScheduleSh);
DragShortcutElem(MoveRegSh);
DragShortcutElem(MoveAwardsSh);
DragShortcutElem(MoveSponsorsSh);
DragShortcutElem(MoveSocialSh);
DragShortcutElem(MoveGamesSh);

function DragShortcutElem(elem){
    elem.ondragstart = () => false;
    let rect = elem.getBoundingClientRect();
    let css = getComputedStyle(elem);
    document.body.style.overflow = 'hidden';
    elem.onmousedown = e => {
        elem.style.position = 'absolute';
        let saveX = e.offsetX;
        let saveY = e.offsetY;

        document.onmousemove = e => {
            elem.style.position = 'absolute';
            elem.style.top = e.pageY - parseInt(css.margin) - saveY + 'px';
            elem.style.left = e.pageX - parseInt(css.margin) - saveX + 'px';
        };
    };

    elem.onmouseup = e => {
        document.onmousemove = () => false;
    };
};

