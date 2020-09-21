// Add Your Code Here...
let resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    location.reload();
});

let rod1 = document.getElementById('rod1');
let rod2 = document.getElementById('rod2');
let rod3 = document.getElementById('rod3');

let disk1 = document.createElement('div');
let disk2 = document.createElement('div');
let disk3 = document.createElement('div');
let disk4 = document.createElement('div');

let rod1Array = [disk4, disk3, disk2, disk1];
let rod2Array = [];
let rod3Array = [];

const createDisk = (disk, diskId) => {
    disk.setAttribute('id', diskId);
    disk.setAttribute('class', 'disk');

}

createDisk(disk4, 'disk4');
createDisk(disk3, 'disk3');
createDisk(disk2, 'disk2');
createDisk(disk1, 'disk1');


let rodsChecked = 0;
const setDisks = (rod, rodArray) => {

    rod.addEventListener('click', function (clickEvent) {
        const clickedRod = clickEvent.currentTarget;
        let currentDisk = rodArray[rodArray.length - 1];
        if (rodsChecked < 1) {
            currentDisk.classList.toggle('clicked');
            rodsChecked++;
        }
        else {
            rodArray.push(currentDisk);

            rodArray.pop();
            currentDisk.remove();


        }



    });



    for (i = 0; i < rodArray.length; i++) {
        rod.append(rodArray[i]);
    }
}


setDisks(rod1, rod1Array);
setDisks(rod2, rod2Array);
setDisks(rod3, rod3Array);