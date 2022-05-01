let tick = ['O', 'X'];
let ranNum = 11;
let m = "";
let val = "A";
let times = 0;
let round = 0;
let replay = 0;
let systemClicked = "";
let playNumOfPress = 0;
let pointForO = 0, pointForX = 0;
let b1 = "", b2 = "", b3 = "", b4 = "", b5 = "", b6 = "", b7 = "", b8 = "", b9 = "";
let av1 = "", av2 = "", av3 = "", av4 = "", av5 = "", av6 = "", av7 = "", av8 = "", av9 = "";
let clickValueBtn1 = 0, clickValueBtn2 = 0, clickValueBtn3 = 0, clickValueBtn4 = 0, clickValueBtn5 = 0, clickValueBtn6 = 0, clickValueBtn7 = 0, clickValueBtn8 = 0, clickValueBtn9 = 0;

for (let l = 1; l < 10; l++) {
    let allBox = `#box${l}`;
    document.querySelector(allBox).classList.add('z-index');
}
setInterval(winning, 100);
document.querySelector('.replayBtn').style.display = "none";
document.querySelector('.choose-O').classList.remove('option-active');
document.querySelector('.choose-X').classList.remove('option-active');


let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
let box9 = document.querySelector('#box9');
let status = document.querySelector('.game-status');
document.querySelector('.restart').addEventListener('click', restart);
document.querySelector('.resume-pause').addEventListener('click', play_pause);
document.querySelector('.choose-O').addEventListener('click', chooseO);
document.querySelector('.choose-X').addEventListener('click', chooseX);
document.querySelector('.sys-page').addEventListener('click', () => {
    document.querySelector('.sys-page').style.width = "0vw";

    systemBox();
});
document.querySelector('.friend').addEventListener('click', () => {
    alert('* * * NOW, YOU ARE PLAYING WITH YOUR FRIEND. * * *');
    ranNum = 11;
    status.innerHTML = "* * * GAME START * * *";
    for (let l = 1; l < 10; l++) {
        let allBox = `#box${l}`;
        document.querySelector(allBox).classList.remove('z-index');
        document.querySelector('.fren-sys').style.width = "0vw";
    }

    setInterval(() => {
        if (ranNum <= 10) {
            ranNum = Math.ceil(Math.random() * 20);
        }
    }, 300);
});
document.querySelector('.system').addEventListener('click', () => {
    document.querySelector('.fren-sys').style.width = "0vw";
    alert('* * * NOW, YOU ARE PLAYING WITH SYSTEM. * * *');
    status.innerHTML = "* * * GAME START * * *";
    for (let l = 1; l < 10; l++) {
        let allBox = `#box${l}`;
        document.querySelector(allBox).classList.remove('z-index');
    }
    if (systemClicked == "O") {
        document.querySelector('.system-status').innerHTML = "YOU HAVE CHOOSEN 'X'.";
    }
    if (systemClicked == "X") {
        document.querySelector('.system-status').innerHTML = "YOU HAVE CHOOSEN 'O'.";
    }

    setInterval(() => {
        ranNum = Math.ceil(Math.random() * 9);
    }, 100);
});
document.querySelector('.replayBtn').addEventListener('click', () => {
    status.innerHTML = "* * * GAME STARTED AGAIN * * *";
    document.querySelector('.replayBtn').style.display = "none";
    document.querySelector('.replayBtn').classList.remove('replay');
    for (let l = 1; l < 10; l++) {
        let allBox = `#box${l}`;
        document.querySelector(allBox).classList.remove('z-index');
        document.querySelector(allBox).innerHTML = "";
    }
    clearValues();
    if (systemClicked == val) {
        console.log("clicked");
        document.querySelector('.sys-page').style.width = '100vw';
    }
    if (ranNum == 11) {
        console.log("clicked");
        document.querySelector('.sys-page').style.width = '0vw';
    }
    val = 'A';
    for (let k = 0; k < 2; k++) {
        let p = tick[k];
        let winStatus = `HURREY '${p}' WON THE MATCH`;

        if ((av1 == p && av2 == p && av3 == p) || (av1 == p && av5 == p && av9 == p) || (av1 == p && av4 == p && av7 == p) || (av4 == p && av5 == p && av6 == p) || (av2 == p && av5 == p && av8 == p) || (av7 == p && av8 == p && av9 == p) || (av3 == p && av6 == p && av9 == p) || (av3 == p && av5 == p && av7 == p)) {
        }
        else if (replay == 9) {
            status.innerHTML = "* * * MATCH IS STARTED AGAIN * * *";
        }
        else if (replay == 10) {
            document.querySelector('.sys-page').style.width = '100vw';
            status.innerHTML = "* * * MATCH IS STARTED AGAIN * * *";
        }
    }
    ClearAnotherValues();
    replay = 0;
});

// 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
box1.addEventListener('click', OnClick1);
function OnClick1() {
    let i;
    if (times % 2 == 0) {
        box1.innerHTML = tick[0];
        times = times + 1;
        b1 = tick[0];
        av1 = tick[0];
    }
    else {
        box1.innerHTML = tick[1];
        times = times + 1;
        b1 = tick[1];
        av1 = tick[1];
    }
    box1.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn1 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222
box2.addEventListener('click', OnClick2);
function OnClick2() {
    let i;
    if (times % 2 == 0) {
        box2.innerHTML = tick[0];
        times = times + 1;
        b2 = tick[0];
        av2 = tick[0];
    }
    else {
        box2.innerHTML = tick[1];
        times = times + 1;
        b2 = tick[1];
        av2 = tick[1];
    }
    box2.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn2 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 3333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
box3.addEventListener('click', OnClick3);
function OnClick3() {
    let i;
    if (times % 2 == 0) {
        box3.innerHTML = tick[0];
        times = times + 1;
        b3 = tick[0];
        av3 = tick[0];
    }
    else {
        box3.innerHTML = tick[1];
        times = times + 1;
        b3 = tick[1];
        av3 = tick[1];
    }
    box3.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn3 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444
box4.addEventListener('click', OnClick4);
function OnClick4() {
    let i;
    if (times % 2 == 0) {
        box4.innerHTML = tick[0];
        times = times + 1;
        b4 = tick[0];
        av4 = tick[0];
    }
    else {
        box4.innerHTML = tick[1];
        times = times + 1;
        b4 = tick[1];
        av4 = tick[1];
    }
    box4.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn4 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
box5.addEventListener('click', OnClick5);
function OnClick5() {
    let i;
    if (times % 2 == 0) {
        box5.innerHTML = tick[0];
        times = times + 1;
        b5 = tick[0];
        av5 = tick[0];
    }
    else {
        box5.innerHTML = tick[1];
        times = times + 1;
        b5 = tick[1];
        av5 = tick[1];
    }
    box5.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn5 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 6666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666666
box6.addEventListener('click', OnClick6);
function OnClick6() {
    if (times % 2 == 0) {
        box6.innerHTML = tick[0];
        times = times + 1;
        b6 = tick[0];
        av6 = tick[1];
    }
    else {
        box6.innerHTML = tick[1];
        times = times + 1;
        b6 = tick[1];
        av6 = tick[0];
    }
    box6.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn6 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
box7.addEventListener('click', OnClick7);
function OnClick7() {
    if (times % 2 == 0) {
        box7.innerHTML = tick[0];
        times = times + 1;
        b7 = tick[0];
        av7 = tick[1];
    }
    else {
        box7.innerHTML = tick[1];
        times = times + 1;
        b7 = tick[1];
        av7 = tick[0];
    }
    box7.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn7 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
box8.addEventListener('click', OnClick8);
function OnClick8() {
    if (times % 2 == 0) {
        box8.innerHTML = tick[0];
        times = times + 1;
        b8 = tick[0];
        av8 = tick[0];
    }
    else {
        box8.innerHTML = tick[1];
        times = times + 1;
        b8 = tick[1];
        av8 = tick[1];
    }
    box8.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn8 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

// 99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
box9.addEventListener('click', OnClick9);
function OnClick9() {
    if (times % 2 == 0) {
        box9.innerHTML = tick[0];
        times = times + 1;
        b9 = tick[0];
        av9 = tick[0];
    }
    else {
        box9.innerHTML = tick[1];
        times = times + 1;
        b9 = tick[1];
        av9 = tick[1];
    }
    box9.classList.add('z-index');
    replay = replay + 1;
    clickValueBtn9 = 1;
    if (ranNum == 11) {
        replay = replay - 1;
    }
    systemBox();
}

function chooseO() {
    times = 0;
    systemClicked = "X";
    document.querySelector('.transparent2').style.zIndex = "3";
    document.querySelector('.fren-sys').style.width = "100vw";
    document.querySelector('.choose-O').classList.add('option-active');
    status.innerHTML = "* * * CHOOSE AN OPTION * * *";
    console.log(systemClicked);
}

function chooseX() {
    times = 1;
    systemClicked = "O";
    document.querySelector('.transparent2').style.zIndex = "3";
    document.querySelector('.fren-sys').style.width = "100vw";
    document.querySelector('.choose-X').classList.add('option-active');
    status.innerHTML = "* * * CHOOSE AN OPTION * * *";
    console.log(systemClicked);
}
function clearValues() {
    b1 = "";
    b2 = "";
    b3 = "";
    b4 = "";
    b5 = "";
    b6 = "";
    b7 = "";
    b8 = "";
    b9 = "";
}
function ClearAnotherValues() {
    av1 = "";
    av2 = "";
    av3 = "";
    av4 = "";
    av5 = "";
    av6 = "";
    av7 = "";
    av8 = "";
    av9 = "";
}

function play_pause() {
    if (playNumOfPress % 2 == 0) {
        for (let l = 1; l < 10; l++) {
            let allBox = `#box${l}`;
            document.querySelector(allBox).classList.add('z-index');
        }
        document.querySelector('.resume-pause').innerHTML = "PLAY";
        document.querySelector('.resume-pause').classList.add('resume');
        status.innerHTML = "* * * PAUSED * * *";
        playNumOfPress++;
    }
    else {
        for (let l = 1; l < 10; l++) {
            let allBox = `#box${l}`;
            document.querySelector(allBox).classList.remove('z-index');
        }
        document.querySelector('.resume-pause').innerHTML = "PAUSE";
        document.querySelector('.resume-pause').classList.remove('resume');
        status.innerHTML = "* * * CONTINUED * * *";
        playNumOfPress++;
    }
}
function pointLimit() {
    if ((pointForO >= 10) || (pointForX >= 10)) {
        document.querySelector('.restart').classList.add('restart_force');
        document.querySelector('.resume-pause').style.display = "none";
        document.querySelector('.replayBtn').style.display = "none";
        if ((pointForO >= 10)) {
            alert("YUP....\n* * * THE GAME IS ENDED * * *\nAND 'O' WON THE MATCH");
        }
        else {
            alert("YUP....\n* * * THE GAME IS ENDED * * *\nAND 'X' WON THE MATCH");
        }
        restart();
    }
}

function replayGame() {
    clickValueBtn1 = 0;
    clickValueBtn2 = 0;
    clickValueBtn3 = 0;
    clickValueBtn4 = 0;
    clickValueBtn5 = 0;
    clickValueBtn6 = 0;
    clickValueBtn7 = 0;
    clickValueBtn8 = 0;
    clickValueBtn9 = 0;
    document.querySelector('.replayBtn').innerHTML = "REPLAY";
    document.querySelector('.replayBtn').classList.add('replay');
}

function winning() {
    m = systemClicked;
    let p = "", q = "";
    if (systemClicked == "X") {
        for (let k = 0; k < 2; k++) {
            p = tick[k];
            let winStatus = `HURREY '${p}' WON THE MATCH`;

            if ((b1 == p && b2 == p && b3 == p) || (b1 == p && b5 == p && b9 == p) || (b1 == p && b4 == p && b7 == p) || (b4 == p && b5 == p && b6 == p) || (b2 == p && b5 == p && b8 == p) || (b7 == p && b8 == p && b9 == p) || (b3 == p && b6 == p && b9 == p) || (b3 == p && b5 == p && b7 == p)) {
                console.log('b1 = ' + b1);
                console.log('b2 = ' + b2);
                console.log('b3 = ' + b3);
                console.log('b4 = ' + b4);
                console.log('b5 = ' + b5);
                console.log('b6 = ' + b6);
                console.log('b7 = ' + b7);
                console.log('b8 = ' + b8);
                console.log('b9 = ' + b9);
                status.innerHTML = winStatus;
                if (p == m) {
                    val = p;
                }
                if (replay == 10) {
                    replay = 0;
                }
                clearValues();
                if (tick[k] == "O") {
                    times = 0;
                    pointForO = pointForO + 1;
                }
                else {
                    times = 1;
                    pointForX = pointForX + 1;

                }
                for (let l = 1; l < 10; l++) {
                    let allBox = `#box${l}`;
                    document.querySelector(allBox).classList.add('z-index');
                }
                if (pointForO < 10) {
                    document.querySelector('.PointOfO').innerHTML = '0' + pointForO;
                }
                else {
                    document.querySelector('.PointOfO').innerHTML = pointForO;
                }
                if (pointForX < 10) {
                    document.querySelector('.PointOfX').innerHTML = '0' + pointForX;
                }
                else {
                    document.querySelector('.PointOfX').innerHTML = pointForX;
                }
                document.querySelector('.replayBtn').style.display = "block";
                replayGame();

            }
            else if (replay == 9) {
                document.querySelector('.replayBtn').style.display = "block";
                status.innerHTML = "* * * MATCH DRAW * * *";
                replayGame();
            }

        }
    } else {
        for (let k = 1; k >= 0; k--) {
            p = tick[k];
            let winStatus = `HURREY '${p}' WON THE MATCH`;

            if ((b1 == p && b2 == p && b3 == p) || (b1 == p && b5 == p && b9 == p) || (b1 == p && b4 == p && b7 == p) || (b4 == p && b5 == p && b6 == p) || (b2 == p && b5 == p && b8 == p) || (b7 == p && b8 == p && b9 == p) || (b3 == p && b6 == p && b9 == p) || (b3 == p && b5 == p && b7 == p)) {
                console.log('b1 = ' + b1);
                console.log('b2 = ' + b2);
                console.log('b3 = ' + b3);
                console.log('b4 = ' + b4);
                console.log('b5 = ' + b5);
                console.log('b6 = ' + b6);
                console.log('b7 = ' + b7);
                console.log('b8 = ' + b8);
                console.log('b9 = ' + b9);
                status.innerHTML = winStatus;
                if (p == m) {
                    val = p;
                }
                if (replay == 10) {
                    replay = 0;
                }
                clearValues();
                if (tick[k] == "O") {
                    times = 0;
                    pointForO = pointForO + 1;
                }
                else {
                    times = 1;
                    pointForX = pointForX + 1;

                }
                for (let l = 1; l < 10; l++) {
                    let allBox = `#box${l}`;
                    document.querySelector(allBox).classList.add('z-index');
                }
                if (pointForO < 10) {
                    document.querySelector('.PointOfO').innerHTML = '0' + pointForO;
                }
                else {
                    document.querySelector('.PointOfO').innerHTML = pointForO;
                }
                if (pointForX < 10) {
                    document.querySelector('.PointOfX').innerHTML = '0' + pointForX;
                }
                else {
                    document.querySelector('.PointOfX').innerHTML = pointForX;
                }
                document.querySelector('.replayBtn').style.display = "block";
                replayGame();

            }
            else if (replay == 9) {
                document.querySelector('.replayBtn').style.display = "block";
                status.innerHTML = "* * * MATCH DRAW * * *";
                replayGame();
            }

        }
    }

    if (replay == 10) {
        document.querySelector('.replayBtn').style.display = "block";
        status.innerHTML = "* * * MATCH DRAW * * *";
        if (systemClicked == "O") {
            times = 0;
        }
        else if (systemClicked == "X") {
            times = 1;
        }
        replayGame();
    }

    let s = "point", Xpoint = "point";
    if (((pointForO - pointForX) >= 2) || (pointForX - pointForO) >= 2) {
        s += "s";
    }
    else {
        s = s;
    }
    if (pointForX >= 2) {
        Xpoint += "s";
    }
    if ((pointForO - pointForX) >= 1) {
        document.querySelector('.final-status').innerHTML = `O is leading by ${(pointForO - pointForX)} ${s}.`;
    }
    else if ((pointForO - pointForX) == 0) {
        document.querySelector('.final-status').innerHTML = `Both are equal by ${pointForX} ${Xpoint}.`;
    }
    else {
        document.querySelector('.final-status').innerHTML = `X is leading by ${(pointForX - pointForO)} ${s}.`;
    }

    if (times % 2 == 0) {
        document.querySelector('.choose-O').classList.add('option-active');
        document.querySelector('.choose-X').classList.remove('option-active');

    }
    else {
        document.querySelector('.choose-X').classList.add('option-active');
        document.querySelector('.choose-O').classList.remove('option-active');
    }
    pointLimit();
    return { val, m };
}

setInterval(() => {
    console.log('val = ' + val);
    console.log('m = ' + m);
    console.log('systemClicked = ' + systemClicked);
    console.log('replay = ' + replay);
    console.log('times = ' + times)
}, 1000);
function restart() {
    replay = 0;
    clearValues();
    clickValueBtn1 = 0;
    clickValueBtn2 = 0;
    clickValueBtn3 = 0;
    clickValueBtn4 = 0;
    clickValueBtn5 = 0;
    clickValueBtn6 = 0;
    clickValueBtn7 = 0;
    clickValueBtn8 = 0;
    clickValueBtn9 = 0;
    playNumOfPress = 0;
    for (let l = 1; l < 10; l++) {
        let allBox = `#box${l}`;
        document.querySelector(allBox).classList.remove('z-index');
        document.querySelector(allBox).innerHTML = "";
    }
    if (pointForO < 10) {
        document.querySelector('.PointOfO').innerHTML = '0' + pointForO;
    }
    else {
        document.querySelector('.PointOfO').innerHTML = pointForO;
    }
    if (pointForX < 10) {
        document.querySelector('.PointOfX').innerHTML = '0' + pointForX;
    }
    else {
        document.querySelector('.PointOfX').innerHTML = pointForX;
    }
    for (let l = 1; l < 10; l++) {
        let allBox = `#box${l}`;
        document.querySelector(allBox).classList.add('z-index');
    }

    // ***********************************************************************************************************************************
    let s = "POINT", Xpoint = "POINT";
    if (((pointForO - pointForX) >= 2) || (pointForX - pointForO) >= 2) {
        s += "S";
    }
    else {
        s = s;
    }
    if (pointForX >= 2) {
        Xpoint += "S";
    }

    if (ranNum <= 10) {
        if (systemClicked == "O") {
            if ((pointForO - pointForX) >= 1) {
                alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND YOU LOOSE BY ${(pointForO - pointForX)} ${s}.`);
            }
            else if ((pointForO - pointForX) == 0) {
                alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND BOTH ARE EQUAL BY ${pointForX} ${Xpoint}.`);
            }
            else {
                alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND YOU WON BY ${(pointForX - pointForO)} ${s}.`);
            }
        }
        else if (systemClicked == "X") {
            if ((pointForO - pointForX) >= 1) {
                alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND YOU WON BY ${(pointForO - pointForX)} ${s}.`);
            }
            else if ((pointForO - pointForX) == 0) {
                alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND BOTH ARE EQUAL BY ${pointForX} ${Xpoint}.`);
            }
            else {
                alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND YOU LOOSE BY ${(pointForX - pointForO)} ${s}.`);
            }
        }

    }
    else {
        if ((pointForO - pointForX) >= 1) {
            alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND 'O' IS WON BY ${(pointForO - pointForX)} ${s}.`);
        }
        else if ((pointForO - pointForX) == 0) {
            alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND BOTH ARE EQUAL BY ${pointForX} ${Xpoint}.`);
        }
        else {
            alert(`YUP....\n* * * THE GAME IS ENDED * * *\nAND 'X' IS WON BY ${(pointForX - pointForO)} ${s}.`);
        }
    }
    pointForO = 00;
    pointForX = 00;
    systemClicked = "";
    status.innerHTML = "CHOOSE 'O'/'X' BEFORE PLAY";
    document.querySelector('.PointOfO').innerHTML = pointForO;
    document.querySelector('.PointOfX').innerHTML = pointForX;
    document.querySelector('.restart').classList.remove('restart_force');
    document.querySelector('.replayBtn').style.display = "none";
    document.querySelector('.resume-pause').style.display = "block";
    document.querySelector('.replayBtn').classList.remove('replay');
    document.querySelector('.transparent2').style.zIndex = "1";
    document.querySelector('.choose-O').classList.add('option-active');
    document.querySelector('.choose-X').classList.remove('option-active');
    document.querySelector('.system-status').innerHTML = systemClicked;
    window.location.reload(true);
}
function systemBox() {
    replay = replay + 1;
    console.log(ranNum);
    if (clickValueBtn1 == 1) {
        if (ranNum == 1) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn2 == 1) {
        if (ranNum == 2) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn3 == 1) {
        if (ranNum == 3) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn4 == 1) {
        if (ranNum == 4) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn5 == 1) {
        if (ranNum == 5) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn6 == 1) {
        if (ranNum == 6) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn7 == 1) {
        if (ranNum == 7) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn8 == 1) {
        if (ranNum == 8) {
            ranNum = ranNum + 1;
        }
    }
    if (clickValueBtn9 == 1) {
        if (ranNum == 9) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn8 == 1) {
        if (ranNum == 8) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn7 == 1) {
        if (ranNum == 7) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn6 == 1) {
        if (ranNum == 6) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn5 == 1) {
        if (ranNum == 5) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn4 == 1) {
        if (ranNum == 4) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn3 == 1) {
        if (ranNum == 3) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn2 == 1) {
        if (ranNum == 2) {
            ranNum = ranNum - 1;
        }
    }
    if (clickValueBtn1 == 1) {
        if (ranNum == 1) {
            ranNum = 0;
        }
    }
    if (ranNum == 1) {
        if (times % 2 == 0) {
            b1 = tick[0];
        }
        else {
            b1 = tick[1];
        }
        clickValueBtn1 = 1;
    }
    if (ranNum == 2) {
        if (times % 2 == 0) {
            b2 = tick[0];
        }
        else {
            b2 = tick[1];
        }
        clickValueBtn2 = 1;
    }
    if (ranNum == 3) {
        if (times % 2 == 0) {
            b3 = tick[0];
        }
        else {
            b3 = tick[1];
        }
        clickValueBtn3 = 1;
    }
    if (ranNum == 4) {
        if (times % 2 == 0) {
            b4 = tick[0];
        }
        else {
            b4 = tick[1];
        }
        clickValueBtn4 = 1;
    }
    if (ranNum == 5) {
        if (times % 2 == 0) {
            b5 = tick[0];
        }
        else {
            b5 = tick[1];
        }
        clickValueBtn5 = 1;
    }
    if (ranNum == 6) {
        if (times % 2 == 0) {
            b6 = tick[0];
        }
        else {
            b6 = tick[1];
        }
        clickValueBtn6 = 1;
    }
    if (ranNum == 7) {
        if (times % 2 == 0) {
            b7 = tick[0];
        }
        else {
            b7 = tick[1];
        }
        clickValueBtn7 = 1;
    }
    if (ranNum == 8) {
        if (times % 2 == 0) {
            b8 = tick[0];
        }
        else {
            b8 = tick[1];
        }
        clickValueBtn8 = 1;
    }
    if (ranNum == 9) {
        if (times % 2 == 0) {
            b9 = tick[0];
        }
        else {
            b9 = tick[1];
        }
        clickValueBtn9 = 1;
    }
    console.log(ranNum);
    let boxClick = `#box${ranNum}`;
    console.log(boxClick);
    document.querySelector(boxClick).classList.add('z-index');
    if (times % 2 == 0) {
        document.querySelector(boxClick).innerHTML = tick[0];
        times = times + 1;
    }
    else {
        document.querySelector(boxClick).innerHTML = tick[1];
        times = times + 1;
    }
}
