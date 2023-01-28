
let TouchMoveAboutSh = document.getElementById('about_sh');
let TouchMoveFAQSh = document.getElementById('faq_sh');
let TouchMoveRulesSh = document.getElementById('rules_sh');
let TouchMoveScheduleSh = document.getElementById('schedule_sh');
let TouchMoveRegSh = document.getElementById('reg_sh');
let TouchMoveAwardsSh = document.getElementById('awards_sh');
let TouchMoveSponsorsSh = document.getElementById('sponsor_sh');
let TouchMoveSocialSh = document.getElementById('social_sh');
let TouchMoveGamesSh = document.getElementById('games_sh');

Drag(TouchMoveAboutSh);
Drag(TouchMoveFAQSh);
Drag(TouchMoveRulesSh);
Drag(TouchMoveScheduleSh);
Drag(TouchMoveRegSh);
Drag(TouchMoveAwardsSh);
Drag(TouchMoveSponsorsSh);
Drag(TouchMoveSocialSh);
Drag(TouchMoveGamesSh);

/*Ловим касание*/
function Drag(elem) {
    elem.ondragstart = () => false;
    elem.addEventListener('touchmove', function (event) {
        var touch = event.targetTouches[0];
        elem.style.left = touch.pageX - 50 + 'px';
        elem.style.top = touch.pageY - 50 + 'px';
        event.preventDefault();
    }, false);
}

let TouchMoveWinAbout = document.querySelector('.desktop_win_about');
let TouchMoveHeaderAbout = document.getElementById('move_about');
let TouchMoveWinFaq = document.querySelector('.desktop_win_faq');
let TouchMoveHeaderFaq = document.getElementById('move_faq');
let TouchMoveWinRules = document.querySelector('.desktop_win_rules');
let TouchMoveHeaderRules = document.getElementById('move_rules');
let TouchMoveWinSchedule = document.querySelector('.desktop_win_schedule');
let TouchMoveHeaderSchedule = document.getElementById('move_schedule');
let TouchMoveWinReg = document.querySelector('.desktop_win_registration');
let TouchMoveHeaderReg = document.getElementById('move_reg');
let TouchMoveWinAwards = document.querySelector('.desktop_win_awards');
let TouchMoveHeaderAwards = document.getElementById('move_awards');
let TouchMoveWinSponsor = document.querySelector('.desktop_win_sponsors');
let TouchMoveHeaderSponsor = document.getElementById('move_sponsor');
let TouchMoveWinSocial = document.querySelector('.desktop_win_social');
let TouchMoveHeaderSocial = document.getElementById('move_social');
let TouchMoveWinGames = document.querySelector('.desktop_win_games');
let TouchMoveHeaderGames = document.getElementById('move_games');

DragWin(TouchMoveWinAbout, TouchMoveHeaderAbout);
DragWin(TouchMoveWinFaq, TouchMoveHeaderFaq);
DragWin(TouchMoveWinRules, TouchMoveHeaderRules);
DragWin(TouchMoveWinSchedule, TouchMoveHeaderSchedule);
DragWin(TouchMoveWinReg, TouchMoveHeaderReg);
DragWin(TouchMoveWinAwards, TouchMoveHeaderAwards);
DragWin(TouchMoveWinSponsor, TouchMoveHeaderSponsor);
DragWin(TouchMoveWinSocial, TouchMoveHeaderSocial);
DragWin(TouchMoveWinGames, TouchMoveHeaderGames);

function DragWin(elem, header) {
    header.addEventListener('touchstart', () => {
        MoveDragWin(elem, header);
    });
}

function MoveDragWin(elem, header) {
    function Move(event) {
        if (header.id != 'nomove') {
            var touch = event.targetTouches[0];
            elem.style.left = touch.pageX - 150 + 'px';
            elem.style.top = touch.pageY - 25 + 'px';
        }
    }
    header.addEventListener('touchmove', Move);
}