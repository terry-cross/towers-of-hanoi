let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    location.reload();
});

const rodClick = function (event) {
    let clickedRod = event.currentTarget;
    let topDisc = clickedRod.lastElementChild;
    if (gameState === 'pickup') {
        topDisc.classList.toggle('clicked');
        holderId = topDisc.id;
        gameState = 'drop';
    }
    else {
        let newDisc = document.getElementById(holderId);
        newDisc.classList.toggle('clicked');
        let discSize = newDisc.dataset.size;
        if (clickedRod.childElementCount > 0) {
            let stackedDisc = clickedRod.firstElementChild.dataset.size;
            discSize <= stackedDisc ? clickedRod.append(newDisc) : alert("Sorry, you can not stack a disc on top of a smaller disc.");
        }
        else {
            clickedRod.append(newDisc);
        }
        gameState = 'pickup';
    }
    if (rod3.childElementCount === 4) {
        setTimeout(function () {
            alert('Congratulations, you beat the tower of Hanoi!');
            location.reload();
        }, 1000);
    }
}

let game = document.getElementById('game');
let holderId;
let gameState = 'pickup';
for (i = 1; i < 4; i++) {
    let rod = document.createElement('div');
    rod.setAttribute('class', 'rod');
    rod.setAttribute('id', 'rod' + i);
    if (i === 1) {
        for (d = 4; d > 0; d--) {
            let disc = document.createElement('div');
            disc.setAttribute('class', 'disc');
            disc.setAttribute('id', 'disc' + d);
            disc.setAttribute('data-size', d);
            rod.append(disc);
        }
    }
    rod.addEventListener('click', rodClick);
    game.append(rod);
}

