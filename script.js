let startTower = document.getElementById("start");
let offsetTower = document.getElementById("offset");
let endTower = document.getElementById("end");
let currentClick = "clickGrab";
let nextClick = "clickPlace";
let towers = document.querySelectorAll("section");
let topDiskHolder = document.getElementById("topDiskHolder");
let info = document.getElementById("info");
info.textContent = "Pick Piece";

handleClick = function (event) {
    info.textContent = "";
    let tower = event.currentTarget;
    console.log( tower );
    if ( currentClick === "clickGrab" ) {
        if ( tower.childElementCount === 0 ) {
            info.textContent = "Pick Piece"
            return;
        }
        let topDisk = tower.lastElementChild;
        topDiskHolder.appendChild( topDisk );
        nextClick = "clickPlace";
        info.textContent = "Place Piece";
        currentClick = nextClick;
        nextClick = "clickGrab";
    } else {
        if ( tower.childElementCount === 0 ) {
            tower.appendChild(topDiskHolder.lastElementChild);
            info.textContent = "Pick Piece";
            currentClick = nextClick;
            nextClick = "clickPlace";
        } else if (tower.lastElementChild.offsetWidth > topDiskHolder.lastElementChild.offsetWidth) {
            tower.appendChild(topDiskHolder.lastElementChild);
            info.textContent = "Pick Piece";
            currentClick = nextClick;
            nextClick = "clickPlace";
        } else {
            info.textContent = "Invalid Move";
        }
        console.log(tower.lastElementChild.offsetWidth);
        nextClick = "clickGrab";

    }
    win();
};

function win() {
    if (endTower.childElementCount === 4) {
        info.textContent = "You Win!"
    }
}

function reset() {
    startTower.appendChild(document.getElementById("four"));
    startTower.appendChild(document.getElementById("three"));
    startTower.appendChild(document.getElementById("two"));
    startTower.appendChild(document.getElementById("one"));
    currentClick = "clickGrab";
    nextClick = "clickPlace";
    info.textContent = "Pick Piece";
}

document.getElementById("reset").addEventListener('click', reset);

for (let i = 0; i < towers.length; i++) {
    towers[i].addEventListener('click', handleClick)
};