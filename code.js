let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    location.reload();
});

let holderId;
let gameState = 'pickup';
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

let rod1 = document.getElementById('rod1');
let rod2 = document.getElementById('rod2');
let rod3 = document.getElementById('rod3');

rod1.addEventListener('click', rodClick);
rod2.addEventListener('click', rodClick);
rod3.addEventListener('click', rodClick);